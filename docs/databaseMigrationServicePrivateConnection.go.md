# `databaseMigrationServicePrivateConnection` Submodule <a name="`databaseMigrationServicePrivateConnection` Submodule" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationServicePrivateConnection <a name="DatabaseMigrationServicePrivateConnection" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection google_database_migration_service_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

databasemigrationserviceprivateconnection.NewDatabaseMigrationServicePrivateConnection(scope Construct, id *string, config DatabaseMigrationServicePrivateConnectionConfig) DatabaseMigrationServicePrivateConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig">DatabaseMigrationServicePrivateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig">DatabaseMigrationServicePrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putVpcPeeringConfig">PutVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetCreateWithoutValidation">ResetCreateWithoutValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetVpcPeeringConfig">ResetVpcPeeringConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putPscInterfaceConfig"></a>

```go
func PutPscInterfaceConfig(value DatabaseMigrationServicePrivateConnectionPscInterfaceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig">DatabaseMigrationServicePrivateConnectionPscInterfaceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseMigrationServicePrivateConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a>

---

##### `PutVpcPeeringConfig` <a name="PutVpcPeeringConfig" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putVpcPeeringConfig"></a>

```go
func PutVpcPeeringConfig(value DatabaseMigrationServicePrivateConnectionVpcPeeringConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putVpcPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---

##### `ResetCreateWithoutValidation` <a name="ResetCreateWithoutValidation" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetCreateWithoutValidation"></a>

```go
func ResetCreateWithoutValidation()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetPscInterfaceConfig"></a>

```go
func ResetPscInterfaceConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcPeeringConfig` <a name="ResetVpcPeeringConfig" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetVpcPeeringConfig"></a>

```go
func ResetVpcPeeringConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatabaseMigrationServicePrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

databasemigrationserviceprivateconnection.DatabaseMigrationServicePrivateConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

databasemigrationserviceprivateconnection.DatabaseMigrationServicePrivateConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

databasemigrationserviceprivateconnection.DatabaseMigrationServicePrivateConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

databasemigrationserviceprivateconnection.DatabaseMigrationServicePrivateConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatabaseMigrationServicePrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseMigrationServicePrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseMigrationServicePrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationServicePrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList">DatabaseMigrationServicePrivateConnectionErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference">DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig">VpcPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.createWithoutValidationInput">CreateWithoutValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput">PrivateConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig">DatabaseMigrationServicePrivateConnectionPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput">VpcPeeringConfigInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.createWithoutValidation">CreateWithoutValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionId">PrivateConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.error"></a>

```go
func Error() DatabaseMigrationServicePrivateConnectionErrorList
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList">DatabaseMigrationServicePrivateConnectionErrorList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.pscInterfaceConfig"></a>

```go
func PscInterfaceConfig() DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference">DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeouts"></a>

```go
func Timeouts() DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a>

---

##### `VpcPeeringConfig`<sup>Required</sup> <a name="VpcPeeringConfig" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig"></a>

```go
func VpcPeeringConfig() DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a>

---

##### `CreateWithoutValidationInput`<sup>Optional</sup> <a name="CreateWithoutValidationInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.createWithoutValidationInput"></a>

```go
func CreateWithoutValidationInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PrivateConnectionIdInput`<sup>Optional</sup> <a name="PrivateConnectionIdInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput"></a>

```go
func PrivateConnectionIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.pscInterfaceConfigInput"></a>

```go
func PscInterfaceConfigInput() DatabaseMigrationServicePrivateConnectionPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig">DatabaseMigrationServicePrivateConnectionPscInterfaceConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcPeeringConfigInput`<sup>Optional</sup> <a name="VpcPeeringConfigInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput"></a>

```go
func VpcPeeringConfigInput() DatabaseMigrationServicePrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---

##### `CreateWithoutValidation`<sup>Required</sup> <a name="CreateWithoutValidation" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.createWithoutValidation"></a>

```go
func CreateWithoutValidation() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PrivateConnectionId`<sup>Required</sup> <a name="PrivateConnectionId" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionId"></a>

```go
func PrivateConnectionId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationServicePrivateConnectionConfig <a name="DatabaseMigrationServicePrivateConnectionConfig" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

&databasemigrationserviceprivateconnection.DatabaseMigrationServicePrivateConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	PrivateConnectionId: *string,
	CreateWithoutValidation: interface{},
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	PscInterfaceConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts,
	VpcPeeringConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId">PrivateConnectionId</a></code> | <code>*string</code> | The private connectivity identifier. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.createWithoutValidation">CreateWithoutValidation</a></code> | <code>interface{}</code> | If set to true, will skip validations. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#id DatabaseMigrationServicePrivateConnection#id}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#project DatabaseMigrationServicePrivateConnection#project}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig">DatabaseMigrationServicePrivateConnectionPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig">VpcPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#location DatabaseMigrationServicePrivateConnection#location}

---

##### `PrivateConnectionId`<sup>Required</sup> <a name="PrivateConnectionId" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId"></a>

```go
PrivateConnectionId *string
```

- *Type:* *string

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#private_connection_id DatabaseMigrationServicePrivateConnection#private_connection_id}

---

##### `CreateWithoutValidation`<sup>Optional</sup> <a name="CreateWithoutValidation" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.createWithoutValidation"></a>

```go
CreateWithoutValidation interface{}
```

- *Type:* interface{}

If set to true, will skip validations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#create_without_validation DatabaseMigrationServicePrivateConnection#create_without_validation}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#deletion_policy DatabaseMigrationServicePrivateConnection#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#display_name DatabaseMigrationServicePrivateConnection#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#id DatabaseMigrationServicePrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#labels DatabaseMigrationServicePrivateConnection#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#project DatabaseMigrationServicePrivateConnection#project}.

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.pscInterfaceConfig"></a>

```go
PscInterfaceConfig DatabaseMigrationServicePrivateConnectionPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig">DatabaseMigrationServicePrivateConnectionPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#psc_interface_config DatabaseMigrationServicePrivateConnection#psc_interface_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.timeouts"></a>

```go
Timeouts DatabaseMigrationServicePrivateConnectionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#timeouts DatabaseMigrationServicePrivateConnection#timeouts}

---

##### `VpcPeeringConfig`<sup>Optional</sup> <a name="VpcPeeringConfig" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig"></a>

```go
VpcPeeringConfig DatabaseMigrationServicePrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#vpc_peering_config DatabaseMigrationServicePrivateConnection#vpc_peering_config}

---

### DatabaseMigrationServicePrivateConnectionError <a name="DatabaseMigrationServicePrivateConnectionError" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

&databasemigrationserviceprivateconnection.DatabaseMigrationServicePrivateConnectionError {

}
```


### DatabaseMigrationServicePrivateConnectionPscInterfaceConfig <a name="DatabaseMigrationServicePrivateConnectionPscInterfaceConfig" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

&databasemigrationserviceprivateconnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig {
	NetworkAttachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | Fully qualified name of the Network Attachment that DMS will connect to. Format: projects/{project}/regions/{region}/networkAttachments/{name}. |

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

Fully qualified name of the Network Attachment that DMS will connect to. Format: projects/{project}/regions/{region}/networkAttachments/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#network_attachment DatabaseMigrationServicePrivateConnection#network_attachment}

---

### DatabaseMigrationServicePrivateConnectionTimeouts <a name="DatabaseMigrationServicePrivateConnectionTimeouts" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

&databasemigrationserviceprivateconnection.DatabaseMigrationServicePrivateConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#create DatabaseMigrationServicePrivateConnection#create}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#delete DatabaseMigrationServicePrivateConnection#delete}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#update DatabaseMigrationServicePrivateConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#create DatabaseMigrationServicePrivateConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#delete DatabaseMigrationServicePrivateConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#update DatabaseMigrationServicePrivateConnection#update}.

---

### DatabaseMigrationServicePrivateConnectionVpcPeeringConfig <a name="DatabaseMigrationServicePrivateConnectionVpcPeeringConfig" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

&databasemigrationserviceprivateconnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig {
	Subnet: *string,
	VpcName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet">Subnet</a></code> | <code>*string</code> | A free subnet for peering. (CIDR of /29). |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName">VpcName</a></code> | <code>*string</code> | Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}. |

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet"></a>

```go
Subnet *string
```

- *Type:* *string

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#subnet DatabaseMigrationServicePrivateConnection#subnet}

---

##### `VpcName`<sup>Required</sup> <a name="VpcName" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName"></a>

```go
VpcName *string
```

- *Type:* *string

Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_private_connection#vpc_name DatabaseMigrationServicePrivateConnection#vpc_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationServicePrivateConnectionErrorList <a name="DatabaseMigrationServicePrivateConnectionErrorList" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

databasemigrationserviceprivateconnection.NewDatabaseMigrationServicePrivateConnectionErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMigrationServicePrivateConnectionErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.get"></a>

```go
func Get(index *f64) DatabaseMigrationServicePrivateConnectionErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseMigrationServicePrivateConnectionErrorOutputReference <a name="DatabaseMigrationServicePrivateConnectionErrorOutputReference" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

databasemigrationserviceprivateconnection.NewDatabaseMigrationServicePrivateConnectionErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMigrationServicePrivateConnectionErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details">Details</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError">DatabaseMigrationServicePrivateConnectionError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details"></a>

```go
func Details() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServicePrivateConnectionError
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError">DatabaseMigrationServicePrivateConnectionError</a>

---


### DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference <a name="DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

databasemigrationserviceprivateconnection.NewDatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig">DatabaseMigrationServicePrivateConnectionPscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServicePrivateConnectionPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionPscInterfaceConfig">DatabaseMigrationServicePrivateConnectionPscInterfaceConfig</a>

---


### DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference <a name="DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

databasemigrationserviceprivateconnection.NewDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference <a name="DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/databasemigrationserviceprivateconnection"

databasemigrationserviceprivateconnection.NewDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput">SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput">VpcNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName">VpcName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput"></a>

```go
func SubnetInput() *string
```

- *Type:* *string

---

##### `VpcNameInput`<sup>Optional</sup> <a name="VpcNameInput" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput"></a>

```go
func VpcNameInput() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `VpcName`<sup>Required</sup> <a name="VpcName" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName"></a>

```go
func VpcName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServicePrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---



