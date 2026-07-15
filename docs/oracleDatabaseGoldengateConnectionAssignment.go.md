# `oracleDatabaseGoldengateConnectionAssignment` Submodule <a name="`oracleDatabaseGoldengateConnectionAssignment` Submodule" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseGoldengateConnectionAssignment <a name="OracleDatabaseGoldengateConnectionAssignment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment google_oracle_database_goldengate_connection_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabasegoldengateconnectionassignment"

oracledatabasegoldengateconnectionassignment.NewOracleDatabaseGoldengateConnectionAssignment(scope Construct, id *string, config OracleDatabaseGoldengateConnectionAssignmentConfig) OracleDatabaseGoldengateConnectionAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig">OracleDatabaseGoldengateConnectionAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig">OracleDatabaseGoldengateConnectionAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties"></a>

```go
func PutProperties(value OracleDatabaseGoldengateConnectionAssignmentProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts"></a>

```go
func PutTimeouts(value OracleDatabaseGoldengateConnectionAssignmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseGoldengateConnectionAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabasegoldengateconnectionassignment"

oracledatabasegoldengateconnectionassignment.OracleDatabaseGoldengateConnectionAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabasegoldengateconnectionassignment"

oracledatabasegoldengateconnectionassignment.OracleDatabaseGoldengateConnectionAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabasegoldengateconnectionassignment"

oracledatabasegoldengateconnectionassignment.OracleDatabaseGoldengateConnectionAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabasegoldengateconnectionassignment"

oracledatabasegoldengateconnectionassignment.OracleDatabaseGoldengateConnectionAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OracleDatabaseGoldengateConnectionAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OracleDatabaseGoldengateConnectionAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OracleDatabaseGoldengateConnectionAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseGoldengateConnectionAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference">OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference">OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentIdInput">GoldengateConnectionAssignmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentId">GoldengateConnectionAssignmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.properties"></a>

```go
func Properties() OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference">OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeouts"></a>

```go
func Timeouts() OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference">OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GoldengateConnectionAssignmentIdInput`<sup>Optional</sup> <a name="GoldengateConnectionAssignmentIdInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentIdInput"></a>

```go
func GoldengateConnectionAssignmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.propertiesInput"></a>

```go
func PropertiesInput() OracleDatabaseGoldengateConnectionAssignmentProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GoldengateConnectionAssignmentId`<sup>Required</sup> <a name="GoldengateConnectionAssignmentId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentId"></a>

```go
func GoldengateConnectionAssignmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseGoldengateConnectionAssignmentConfig <a name="OracleDatabaseGoldengateConnectionAssignmentConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabasegoldengateconnectionassignment"

&oracledatabasegoldengateconnectionassignment.OracleDatabaseGoldengateConnectionAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GoldengateConnectionAssignmentId: *string,
	Location: *string,
	Properties: github.com/cdktn-io/cdktn-provider-google-go/google/v19.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties,
	DeletionPolicy: *string,
	DeletionProtection: interface{},
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.goldengateConnectionAssignmentId">GoldengateConnectionAssignmentId</a></code> | <code>*string</code> | The ID of the GoldengateConnectionAssignment to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#id OracleDatabaseGoldengateConnectionAssignment#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels or tags associated with the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#project OracleDatabaseGoldengateConnectionAssignment#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GoldengateConnectionAssignmentId`<sup>Required</sup> <a name="GoldengateConnectionAssignmentId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.goldengateConnectionAssignmentId"></a>

```go
GoldengateConnectionAssignmentId *string
```

- *Type:* *string

The ID of the GoldengateConnectionAssignment to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_connection_assignment_id OracleDatabaseGoldengateConnectionAssignment#goldengate_connection_assignment_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#location OracleDatabaseGoldengateConnectionAssignment#location}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.properties"></a>

```go
Properties OracleDatabaseGoldengateConnectionAssignmentProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#properties OracleDatabaseGoldengateConnectionAssignment#properties}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#deletion_policy OracleDatabaseGoldengateConnectionAssignment#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#deletion_protection OracleDatabaseGoldengateConnectionAssignment#deletion_protection}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the GoldengateConnectionAssignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#display_name OracleDatabaseGoldengateConnectionAssignment#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#id OracleDatabaseGoldengateConnectionAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels or tags associated with the GoldengateConnectionAssignment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#labels OracleDatabaseGoldengateConnectionAssignment#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#project OracleDatabaseGoldengateConnectionAssignment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.timeouts"></a>

```go
Timeouts OracleDatabaseGoldengateConnectionAssignmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#timeouts OracleDatabaseGoldengateConnectionAssignment#timeouts}

---

### OracleDatabaseGoldengateConnectionAssignmentProperties <a name="OracleDatabaseGoldengateConnectionAssignmentProperties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabasegoldengateconnectionassignment"

&oracledatabasegoldengateconnectionassignment.OracleDatabaseGoldengateConnectionAssignmentProperties {
	GoldengateConnection: *string,
	GoldengateDeployment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateConnection">GoldengateConnection</a></code> | <code>*string</code> | The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateDeployment">GoldengateDeployment</a></code> | <code>*string</code> | The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}. |

---

##### `GoldengateConnection`<sup>Required</sup> <a name="GoldengateConnection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateConnection"></a>

```go
GoldengateConnection *string
```

- *Type:* *string

The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_connection OracleDatabaseGoldengateConnectionAssignment#goldengate_connection}

---

##### `GoldengateDeployment`<sup>Required</sup> <a name="GoldengateDeployment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateDeployment"></a>

```go
GoldengateDeployment *string
```

- *Type:* *string

The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_deployment OracleDatabaseGoldengateConnectionAssignment#goldengate_deployment}

---

### OracleDatabaseGoldengateConnectionAssignmentTimeouts <a name="OracleDatabaseGoldengateConnectionAssignmentTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabasegoldengateconnectionassignment"

&oracledatabasegoldengateconnectionassignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#create OracleDatabaseGoldengateConnectionAssignment#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#delete OracleDatabaseGoldengateConnectionAssignment#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#update OracleDatabaseGoldengateConnectionAssignment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#create OracleDatabaseGoldengateConnectionAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#delete OracleDatabaseGoldengateConnectionAssignment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_goldengate_connection_assignment#update OracleDatabaseGoldengateConnectionAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference <a name="OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabasegoldengateconnectionassignment"

oracledatabasegoldengateconnectionassignment.NewOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnectionInput">GoldengateConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeploymentInput">GoldengateDeploymentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnection">GoldengateConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeployment">GoldengateDeployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `GoldengateConnectionInput`<sup>Optional</sup> <a name="GoldengateConnectionInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnectionInput"></a>

```go
func GoldengateConnectionInput() *string
```

- *Type:* *string

---

##### `GoldengateDeploymentInput`<sup>Optional</sup> <a name="GoldengateDeploymentInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeploymentInput"></a>

```go
func GoldengateDeploymentInput() *string
```

- *Type:* *string

---

##### `GoldengateConnection`<sup>Required</sup> <a name="GoldengateConnection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnection"></a>

```go
func GoldengateConnection() *string
```

- *Type:* *string

---

##### `GoldengateDeployment`<sup>Required</sup> <a name="GoldengateDeployment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeployment"></a>

```go
func GoldengateDeployment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() OracleDatabaseGoldengateConnectionAssignmentProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

---


### OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference <a name="OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabasegoldengateconnectionassignment"

oracledatabasegoldengateconnectionassignment.NewOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



