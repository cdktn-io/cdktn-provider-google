# `bigqueryDataTransferDataSourceEnrollment` Submodule <a name="`bigqueryDataTransferDataSourceEnrollment` Submodule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDataTransferDataSourceEnrollment <a name="BigqueryDataTransferDataSourceEnrollment" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment google_bigquery_data_transfer_data_source_enrollment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigquerydatatransferdatasourceenrollment"

bigquerydatatransferdatasourceenrollment.NewBigqueryDataTransferDataSourceEnrollment(scope Construct, id *string, config BigqueryDataTransferDataSourceEnrollmentConfig) BigqueryDataTransferDataSourceEnrollment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig">BigqueryDataTransferDataSourceEnrollmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig">BigqueryDataTransferDataSourceEnrollmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation">ResetUnenrollLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts"></a>

```go
func PutTimeouts(value BigqueryDataTransferDataSourceEnrollmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUnenrollLocation` <a name="ResetUnenrollLocation" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation"></a>

```go
func ResetUnenrollLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigquerydatatransferdatasourceenrollment"

bigquerydatatransferdatasourceenrollment.BigqueryDataTransferDataSourceEnrollment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigquerydatatransferdatasourceenrollment"

bigquerydatatransferdatasourceenrollment.BigqueryDataTransferDataSourceEnrollment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigquerydatatransferdatasourceenrollment"

bigquerydatatransferdatasourceenrollment.BigqueryDataTransferDataSourceEnrollment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigquerydatatransferdatasourceenrollment"

bigquerydatatransferdatasourceenrollment.BigqueryDataTransferDataSourceEnrollment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigqueryDataTransferDataSourceEnrollment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigqueryDataTransferDataSourceEnrollment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryDataTransferDataSourceEnrollment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataRefreshType">DataRefreshType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays">DefaultDataRefreshWindowDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultSchedule">DefaultSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.helpUrl">HelpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled">ManualRunsDisabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval">MinimumScheduleInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList">BigqueryDataTransferDataSourceEnrollmentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule">SupportsCustomSchedule</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds">UpdateDeadlineSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput">UnenrollLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocation">UnenrollLocation</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `DataRefreshType`<sup>Required</sup> <a name="DataRefreshType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataRefreshType"></a>

```go
func DataRefreshType() *string
```

- *Type:* *string

---

##### `DefaultDataRefreshWindowDays`<sup>Required</sup> <a name="DefaultDataRefreshWindowDays" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays"></a>

```go
func DefaultDataRefreshWindowDays() *f64
```

- *Type:* *f64

---

##### `DefaultSchedule`<sup>Required</sup> <a name="DefaultSchedule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultSchedule"></a>

```go
func DefaultSchedule() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `HelpUrl`<sup>Required</sup> <a name="HelpUrl" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.helpUrl"></a>

```go
func HelpUrl() *string
```

- *Type:* *string

---

##### `ManualRunsDisabled`<sup>Required</sup> <a name="ManualRunsDisabled" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled"></a>

```go
func ManualRunsDisabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MinimumScheduleInterval`<sup>Required</sup> <a name="MinimumScheduleInterval" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval"></a>

```go
func MinimumScheduleInterval() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.parameters"></a>

```go
func Parameters() BigqueryDataTransferDataSourceEnrollmentParametersList
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList">BigqueryDataTransferDataSourceEnrollmentParametersList</a>

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportsCustomSchedule`<sup>Required</sup> <a name="SupportsCustomSchedule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule"></a>

```go
func SupportsCustomSchedule() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeouts"></a>

```go
func Timeouts() BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a>

---

##### `UpdateDeadlineSeconds`<sup>Required</sup> <a name="UpdateDeadlineSeconds" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds"></a>

```go
func UpdateDeadlineSeconds() *f64
```

- *Type:* *f64

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput"></a>

```go
func DataSourceIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnenrollLocationInput`<sup>Optional</sup> <a name="UnenrollLocationInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput"></a>

```go
func UnenrollLocationInput() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `UnenrollLocation`<sup>Required</sup> <a name="UnenrollLocation" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocation"></a>

```go
func UnenrollLocation() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDataTransferDataSourceEnrollmentConfig <a name="BigqueryDataTransferDataSourceEnrollmentConfig" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigquerydatatransferdatasourceenrollment"

&bigquerydatatransferdatasourceenrollment.BigqueryDataTransferDataSourceEnrollmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataSourceId: *string,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts,
	UnenrollLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | The ID of the data source to enroll. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation">UnenrollLocation</a></code> | <code>*string</code> | The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId"></a>

```go
DataSourceId *string
```

- *Type:* *string

The ID of the data source to enroll.

For Google Cloud Carbon Footprint exports this is
'61cede5a-0000-2440-ad42-883d24f8f7b8'. Call 'projects.dataSources.list' to see the data
sources currently enrolled in a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#data_source_id BigqueryDataTransferDataSourceEnrollment#data_source_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#deletion_policy BigqueryDataTransferDataSourceEnrollment#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts"></a>

```go
Timeouts BigqueryDataTransferDataSourceEnrollmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#timeouts BigqueryDataTransferDataSourceEnrollment#timeouts}

---

##### `UnenrollLocation`<sup>Optional</sup> <a name="UnenrollLocation" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation"></a>

```go
UnenrollLocation *string
```

- *Type:* *string

The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed.

Enrollment itself is project-wide and unenrolling through any location removes it everywhere;
this only exists because the API offers no project-level unenroll method. Override it only if
'us' is not routable for the project, for example under a data-residency organization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#unenroll_location BigqueryDataTransferDataSourceEnrollment#unenroll_location}

---

### BigqueryDataTransferDataSourceEnrollmentParameters <a name="BigqueryDataTransferDataSourceEnrollmentParameters" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigquerydatatransferdatasourceenrollment"

&bigquerydatatransferdatasourceenrollment.BigqueryDataTransferDataSourceEnrollmentParameters {

}
```


### BigqueryDataTransferDataSourceEnrollmentTimeouts <a name="BigqueryDataTransferDataSourceEnrollmentTimeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigquerydatatransferdatasourceenrollment"

&bigquerydatatransferdatasourceenrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#create BigqueryDataTransferDataSourceEnrollment#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#delete BigqueryDataTransferDataSourceEnrollment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#create BigqueryDataTransferDataSourceEnrollment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#delete BigqueryDataTransferDataSourceEnrollment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDataTransferDataSourceEnrollmentParametersList <a name="BigqueryDataTransferDataSourceEnrollmentParametersList" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigquerydatatransferdatasourceenrollment"

bigquerydatatransferdatasourceenrollment.NewBigqueryDataTransferDataSourceEnrollmentParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryDataTransferDataSourceEnrollmentParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get"></a>

```go
func Get(index *f64) BigqueryDataTransferDataSourceEnrollmentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BigqueryDataTransferDataSourceEnrollmentParametersOutputReference <a name="BigqueryDataTransferDataSourceEnrollmentParametersOutputReference" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigquerydatatransferdatasourceenrollment"

bigquerydatatransferdatasourceenrollment.NewBigqueryDataTransferDataSourceEnrollmentParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryDataTransferDataSourceEnrollmentParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues">AllowedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated">Deprecated</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable">Immutable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize">MaxListSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue">MaxValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue">MinValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId">ParamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required">Required</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription">ValidationDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl">ValidationHelpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex">ValidationRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters">BigqueryDataTransferDataSourceEnrollmentParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues"></a>

```go
func AllowedValues() *[]*string
```

- *Type:* *[]*string

---

##### `Deprecated`<sup>Required</sup> <a name="Deprecated" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated"></a>

```go
func Deprecated() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Immutable`<sup>Required</sup> <a name="Immutable" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable"></a>

```go
func Immutable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxListSize`<sup>Required</sup> <a name="MaxListSize" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize"></a>

```go
func MaxListSize() *f64
```

- *Type:* *f64

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue"></a>

```go
func MaxValue() *f64
```

- *Type:* *f64

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue"></a>

```go
func MinValue() *f64
```

- *Type:* *f64

---

##### `ParamId`<sup>Required</sup> <a name="ParamId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId"></a>

```go
func ParamId() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required"></a>

```go
func Required() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidationDescription`<sup>Required</sup> <a name="ValidationDescription" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription"></a>

```go
func ValidationDescription() *string
```

- *Type:* *string

---

##### `ValidationHelpUrl`<sup>Required</sup> <a name="ValidationHelpUrl" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl"></a>

```go
func ValidationHelpUrl() *string
```

- *Type:* *string

---

##### `ValidationRegex`<sup>Required</sup> <a name="ValidationRegex" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex"></a>

```go
func ValidationRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryDataTransferDataSourceEnrollmentParameters
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters">BigqueryDataTransferDataSourceEnrollmentParameters</a>

---


### BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference <a name="BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigquerydatatransferdatasourceenrollment"

bigquerydatatransferdatasourceenrollment.NewBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



