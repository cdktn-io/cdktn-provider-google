# `chronicleDataTable` Submodule <a name="`chronicleDataTable` Submodule" id="@cdktn/provider-google.chronicleDataTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleDataTable <a name="ChronicleDataTable" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table google_chronicle_data_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

chronicledatatable.NewChronicleDataTable(scope Construct, id *string, config ChronicleDataTableConfig) ChronicleDataTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig">ChronicleDataTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig">ChronicleDataTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putColumnInfo">PutColumnInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putScopeInfo">PutScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetColumnInfo">ResetColumnInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetRowTimeToLive">ResetRowTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetScopeInfo">ResetScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutColumnInfo` <a name="PutColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putColumnInfo"></a>

```go
func PutColumnInfo(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putColumnInfo.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScopeInfo` <a name="PutScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putScopeInfo"></a>

```go
func PutScopeInfo(value ChronicleDataTableScopeInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putScopeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putTimeouts"></a>

```go
func PutTimeouts(value ChronicleDataTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a>

---

##### `ResetColumnInfo` <a name="ResetColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetColumnInfo"></a>

```go
func ResetColumnInfo()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRowTimeToLive` <a name="ResetRowTimeToLive" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetRowTimeToLive"></a>

```go
func ResetRowTimeToLive()
```

##### `ResetScopeInfo` <a name="ResetScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetScopeInfo"></a>

```go
func ResetScopeInfo()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleDataTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

chronicledatatable.ChronicleDataTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

chronicledatatable.ChronicleDataTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

chronicledatatable.ChronicleDataTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

chronicledatatable.ChronicleDataTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChronicleDataTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChronicleDataTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChronicleDataTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleDataTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.approximateRowCount">ApproximateRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfo">ColumnInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList">ChronicleDataTableColumnInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableUuid">DataTableUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveUpdateTime">RowTimeToLiveUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.ruleAssociationsCount">RuleAssociationsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rules">Rules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfo">ScopeInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference">ChronicleDataTableScopeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference">ChronicleDataTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateSource">UpdateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfoInput">ColumnInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableIdInput">DataTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveInput">RowTimeToLiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfoInput">ScopeInfoInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableId">DataTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLive">RowTimeToLive</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApproximateRowCount`<sup>Required</sup> <a name="ApproximateRowCount" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.approximateRowCount"></a>

```go
func ApproximateRowCount() *f64
```

- *Type:* *f64

---

##### `ColumnInfo`<sup>Required</sup> <a name="ColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfo"></a>

```go
func ColumnInfo() ChronicleDataTableColumnInfoList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList">ChronicleDataTableColumnInfoList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataTableUuid`<sup>Required</sup> <a name="DataTableUuid" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableUuid"></a>

```go
func DataTableUuid() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RowTimeToLiveUpdateTime`<sup>Required</sup> <a name="RowTimeToLiveUpdateTime" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveUpdateTime"></a>

```go
func RowTimeToLiveUpdateTime() *string
```

- *Type:* *string

---

##### `RuleAssociationsCount`<sup>Required</sup> <a name="RuleAssociationsCount" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.ruleAssociationsCount"></a>

```go
func RuleAssociationsCount() *f64
```

- *Type:* *f64

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rules"></a>

```go
func Rules() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeInfo`<sup>Required</sup> <a name="ScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfo"></a>

```go
func ScopeInfo() ChronicleDataTableScopeInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference">ChronicleDataTableScopeInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeouts"></a>

```go
func Timeouts() ChronicleDataTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference">ChronicleDataTableTimeoutsOutputReference</a>

---

##### `UpdateSource`<sup>Required</sup> <a name="UpdateSource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateSource"></a>

```go
func UpdateSource() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ColumnInfoInput`<sup>Optional</sup> <a name="ColumnInfoInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfoInput"></a>

```go
func ColumnInfoInput() interface{}
```

- *Type:* interface{}

---

##### `DataTableIdInput`<sup>Optional</sup> <a name="DataTableIdInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableIdInput"></a>

```go
func DataTableIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RowTimeToLiveInput`<sup>Optional</sup> <a name="RowTimeToLiveInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveInput"></a>

```go
func RowTimeToLiveInput() *string
```

- *Type:* *string

---

##### `ScopeInfoInput`<sup>Optional</sup> <a name="ScopeInfoInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfoInput"></a>

```go
func ScopeInfoInput() ChronicleDataTableScopeInfo
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataTableId`<sup>Required</sup> <a name="DataTableId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableId"></a>

```go
func DataTableId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RowTimeToLive`<sup>Required</sup> <a name="RowTimeToLive" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLive"></a>

```go
func RowTimeToLive() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleDataTableColumnInfo <a name="ChronicleDataTableColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

&chronicledatatable.ChronicleDataTableColumnInfo {
	ColumnIndex: *f64,
	OriginalColumn: *string,
	ColumnType: *string,
	KeyColumn: interface{},
	MappedColumnPath: *string,
	RepeatedValues: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnIndex">ColumnIndex</a></code> | <code>*f64</code> | Column Index. 0,1,2... |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.originalColumn">OriginalColumn</a></code> | <code>*string</code> | Original column name of the Data Table (present in the CSV header in case of creation of data tables using file uploads). |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnType">ColumnType</a></code> | <code>*string</code> | Column type can be STRING, CIDR (Ex- 10.1.1.0/24), REGEX Possible values: STRING REGEX CIDR NUMBER Possible values: ["STRING", "REGEX", "CIDR", "NUMBER"]. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.keyColumn">KeyColumn</a></code> | <code>interface{}</code> | Whether to include this column in the calculation of the row ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.mappedColumnPath">MappedColumnPath</a></code> | <code>*string</code> | Entity proto field path that the column is mapped to. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.repeatedValues">RepeatedValues</a></code> | <code>interface{}</code> | Whether the column is a repeated values column. |

---

##### `ColumnIndex`<sup>Required</sup> <a name="ColumnIndex" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnIndex"></a>

```go
ColumnIndex *f64
```

- *Type:* *f64

Column Index. 0,1,2...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#column_index ChronicleDataTable#column_index}

---

##### `OriginalColumn`<sup>Required</sup> <a name="OriginalColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.originalColumn"></a>

```go
OriginalColumn *string
```

- *Type:* *string

Original column name of the Data Table (present in the CSV header in case of creation of data tables using file uploads).

It must satisfy the
following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Must be unique and has length < 256

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#original_column ChronicleDataTable#original_column}

---

##### `ColumnType`<sup>Optional</sup> <a name="ColumnType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnType"></a>

```go
ColumnType *string
```

- *Type:* *string

Column type can be STRING, CIDR (Ex- 10.1.1.0/24), REGEX Possible values: STRING REGEX CIDR NUMBER Possible values: ["STRING", "REGEX", "CIDR", "NUMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#column_type ChronicleDataTable#column_type}

---

##### `KeyColumn`<sup>Optional</sup> <a name="KeyColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.keyColumn"></a>

```go
KeyColumn interface{}
```

- *Type:* interface{}

Whether to include this column in the calculation of the row ID.

If no columns have key_column = true, all columns will be included in the
calculation of the row ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#key_column ChronicleDataTable#key_column}

---

##### `MappedColumnPath`<sup>Optional</sup> <a name="MappedColumnPath" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.mappedColumnPath"></a>

```go
MappedColumnPath *string
```

- *Type:* *string

Entity proto field path that the column is mapped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#mapped_column_path ChronicleDataTable#mapped_column_path}

---

##### `RepeatedValues`<sup>Optional</sup> <a name="RepeatedValues" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.repeatedValues"></a>

```go
RepeatedValues interface{}
```

- *Type:* interface{}

Whether the column is a repeated values column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#repeated_values ChronicleDataTable#repeated_values}

---

### ChronicleDataTableConfig <a name="ChronicleDataTableConfig" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

&chronicledatatable.ChronicleDataTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataTableId: *string,
	Description: *string,
	Instance: *string,
	Location: *string,
	ColumnInfo: interface{},
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	RowTimeToLive: *string,
	ScopeInfo: github.com/cdktn-io/cdktn-provider-google-go/google/v19.chronicleDataTable.ChronicleDataTableScopeInfo,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.chronicleDataTable.ChronicleDataTableTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dataTableId">DataTableId</a></code> | <code>*string</code> | The ID to use for the data table. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.description">Description</a></code> | <code>*string</code> | A user-provided description of the data table. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.instance">Instance</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.columnInfo">ColumnInfo</a></code> | <code>interface{}</code> | column_info block. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/chronicle_data_table.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#id ChronicleDataTable#id}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#project ChronicleDataTable#project}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.rowTimeToLive">RowTimeToLive</a></code> | <code>*string</code> | User-provided TTL of the data table. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.scopeInfo">ScopeInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a></code> | scope_info block. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataTableId`<sup>Required</sup> <a name="DataTableId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dataTableId"></a>

```go
DataTableId *string
```

- *Type:* *string

The ID to use for the data table.

This is also the display name for
the data table. It must satisfy the following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Must be unique and has length < 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#data_table_id ChronicleDataTable#data_table_id}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A user-provided description of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#description ChronicleDataTable#description}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#instance ChronicleDataTable#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#location ChronicleDataTable#location}

---

##### `ColumnInfo`<sup>Optional</sup> <a name="ColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.columnInfo"></a>

```go
ColumnInfo interface{}
```

- *Type:* interface{}

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#column_info ChronicleDataTable#column_info}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/chronicle_data_table.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#deletion_policy ChronicleDataTable#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#id ChronicleDataTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#project ChronicleDataTable#project}.

---

##### `RowTimeToLive`<sup>Optional</sup> <a name="RowTimeToLive" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.rowTimeToLive"></a>

```go
RowTimeToLive *string
```

- *Type:* *string

User-provided TTL of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#row_time_to_live ChronicleDataTable#row_time_to_live}

---

##### `ScopeInfo`<sup>Optional</sup> <a name="ScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.scopeInfo"></a>

```go
ScopeInfo ChronicleDataTableScopeInfo
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

scope_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#scope_info ChronicleDataTable#scope_info}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.timeouts"></a>

```go
Timeouts ChronicleDataTableTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#timeouts ChronicleDataTable#timeouts}

---

### ChronicleDataTableScopeInfo <a name="ChronicleDataTableScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

&chronicledatatable.ChronicleDataTableScopeInfo {
	DataAccessScopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo.property.dataAccessScopes">DataAccessScopes</a></code> | <code>*[]*string</code> | Contains the list of scope names of the data table. |

---

##### `DataAccessScopes`<sup>Required</sup> <a name="DataAccessScopes" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo.property.dataAccessScopes"></a>

```go
DataAccessScopes *[]*string
```

- *Type:* *[]*string

Contains the list of scope names of the data table.

If the list is empty,
the data table is treated as unscoped. The scope names should be
full resource names and should be of the format:
"projects/{project}/locations/{location}/instances/{instance}/dataAccessScopes/{scope_name}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#data_access_scopes ChronicleDataTable#data_access_scopes}

---

### ChronicleDataTableTimeouts <a name="ChronicleDataTableTimeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

&chronicledatatable.ChronicleDataTableTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#create ChronicleDataTable#create}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#delete ChronicleDataTable#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#update ChronicleDataTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#create ChronicleDataTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#delete ChronicleDataTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table#update ChronicleDataTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleDataTableColumnInfoList <a name="ChronicleDataTableColumnInfoList" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

chronicledatatable.NewChronicleDataTableColumnInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleDataTableColumnInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.get"></a>

```go
func Get(index *f64) ChronicleDataTableColumnInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleDataTableColumnInfoOutputReference <a name="ChronicleDataTableColumnInfoOutputReference" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

chronicledatatable.NewChronicleDataTableColumnInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleDataTableColumnInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetColumnType">ResetColumnType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetKeyColumn">ResetKeyColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetMappedColumnPath">ResetMappedColumnPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetRepeatedValues">ResetRepeatedValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnType` <a name="ResetColumnType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetColumnType"></a>

```go
func ResetColumnType()
```

##### `ResetKeyColumn` <a name="ResetKeyColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetKeyColumn"></a>

```go
func ResetKeyColumn()
```

##### `ResetMappedColumnPath` <a name="ResetMappedColumnPath" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetMappedColumnPath"></a>

```go
func ResetMappedColumnPath()
```

##### `ResetRepeatedValues` <a name="ResetRepeatedValues" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetRepeatedValues"></a>

```go
func ResetRepeatedValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndexInput">ColumnIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnTypeInput">ColumnTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumnInput">KeyColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPathInput">MappedColumnPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumnInput">OriginalColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValuesInput">RepeatedValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndex">ColumnIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnType">ColumnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumn">KeyColumn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPath">MappedColumnPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumn">OriginalColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValues">RepeatedValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnIndexInput`<sup>Optional</sup> <a name="ColumnIndexInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndexInput"></a>

```go
func ColumnIndexInput() *f64
```

- *Type:* *f64

---

##### `ColumnTypeInput`<sup>Optional</sup> <a name="ColumnTypeInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnTypeInput"></a>

```go
func ColumnTypeInput() *string
```

- *Type:* *string

---

##### `KeyColumnInput`<sup>Optional</sup> <a name="KeyColumnInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumnInput"></a>

```go
func KeyColumnInput() interface{}
```

- *Type:* interface{}

---

##### `MappedColumnPathInput`<sup>Optional</sup> <a name="MappedColumnPathInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPathInput"></a>

```go
func MappedColumnPathInput() *string
```

- *Type:* *string

---

##### `OriginalColumnInput`<sup>Optional</sup> <a name="OriginalColumnInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumnInput"></a>

```go
func OriginalColumnInput() *string
```

- *Type:* *string

---

##### `RepeatedValuesInput`<sup>Optional</sup> <a name="RepeatedValuesInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValuesInput"></a>

```go
func RepeatedValuesInput() interface{}
```

- *Type:* interface{}

---

##### `ColumnIndex`<sup>Required</sup> <a name="ColumnIndex" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndex"></a>

```go
func ColumnIndex() *f64
```

- *Type:* *f64

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnType"></a>

```go
func ColumnType() *string
```

- *Type:* *string

---

##### `KeyColumn`<sup>Required</sup> <a name="KeyColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumn"></a>

```go
func KeyColumn() interface{}
```

- *Type:* interface{}

---

##### `MappedColumnPath`<sup>Required</sup> <a name="MappedColumnPath" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPath"></a>

```go
func MappedColumnPath() *string
```

- *Type:* *string

---

##### `OriginalColumn`<sup>Required</sup> <a name="OriginalColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumn"></a>

```go
func OriginalColumn() *string
```

- *Type:* *string

---

##### `RepeatedValues`<sup>Required</sup> <a name="RepeatedValues" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValues"></a>

```go
func RepeatedValues() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleDataTableScopeInfoOutputReference <a name="ChronicleDataTableScopeInfoOutputReference" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

chronicledatatable.NewChronicleDataTableScopeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleDataTableScopeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopesInput">DataAccessScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopes">DataAccessScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataAccessScopesInput`<sup>Optional</sup> <a name="DataAccessScopesInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopesInput"></a>

```go
func DataAccessScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataAccessScopes`<sup>Required</sup> <a name="DataAccessScopes" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopes"></a>

```go
func DataAccessScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleDataTableScopeInfo
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

---


### ChronicleDataTableTimeoutsOutputReference <a name="ChronicleDataTableTimeoutsOutputReference" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledatatable"

chronicledatatable.NewChronicleDataTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleDataTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



