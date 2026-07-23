# `databaseMigrationServiceMigrationJob` Submodule <a name="`databaseMigrationServiceMigrationJob` Submodule" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationServiceMigrationJob <a name="DatabaseMigrationServiceMigrationJob" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job google_database_migration_service_migration_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJob(scope Construct, id *string, config DatabaseMigrationServiceMigrationJobConfig) DatabaseMigrationServiceMigrationJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig">DatabaseMigrationServiceMigrationJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig">DatabaseMigrationServiceMigrationJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putDumpFlags">PutDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putObjectsConfig">PutObjectsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPerformanceConfig">PutPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPostgresHomogeneousConfig">PutPostgresHomogeneousConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putReverseSshConnectivity">PutReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putStaticIpConnectivity">PutStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity">PutVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpFlags">ResetDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpPath">ResetDumpPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpType">ResetDumpType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetObjectsConfig">ResetObjectsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetPerformanceConfig">ResetPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetPostgresHomogeneousConfig">ResetPostgresHomogeneousConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity">ResetReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity">ResetStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetStopOnWarnings">ResetStopOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity">ResetVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDumpFlags` <a name="PutDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putDumpFlags"></a>

```go
func PutDumpFlags(value DatabaseMigrationServiceMigrationJobDumpFlags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putDumpFlags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `PutObjectsConfig` <a name="PutObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putObjectsConfig"></a>

```go
func PutObjectsConfig(value DatabaseMigrationServiceMigrationJobObjectsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putObjectsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a>

---

##### `PutPerformanceConfig` <a name="PutPerformanceConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPerformanceConfig"></a>

```go
func PutPerformanceConfig(value DatabaseMigrationServiceMigrationJobPerformanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `PutPostgresHomogeneousConfig` <a name="PutPostgresHomogeneousConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPostgresHomogeneousConfig"></a>

```go
func PutPostgresHomogeneousConfig(value DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPostgresHomogeneousConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a>

---

##### `PutReverseSshConnectivity` <a name="PutReverseSshConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putReverseSshConnectivity"></a>

```go
func PutReverseSshConnectivity(value DatabaseMigrationServiceMigrationJobReverseSshConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putReverseSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `PutStaticIpConnectivity` <a name="PutStaticIpConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putStaticIpConnectivity"></a>

```go
func PutStaticIpConnectivity(value DatabaseMigrationServiceMigrationJobStaticIpConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putStaticIpConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseMigrationServiceMigrationJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a>

---

##### `PutVpcPeeringConnectivity` <a name="PutVpcPeeringConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity"></a>

```go
func PutVpcPeeringConnectivity(value DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDesiredState"></a>

```go
func ResetDesiredState()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDumpFlags` <a name="ResetDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpFlags"></a>

```go
func ResetDumpFlags()
```

##### `ResetDumpPath` <a name="ResetDumpPath" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpPath"></a>

```go
func ResetDumpPath()
```

##### `ResetDumpType` <a name="ResetDumpType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpType"></a>

```go
func ResetDumpType()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetObjectsConfig` <a name="ResetObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetObjectsConfig"></a>

```go
func ResetObjectsConfig()
```

##### `ResetPerformanceConfig` <a name="ResetPerformanceConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetPerformanceConfig"></a>

```go
func ResetPerformanceConfig()
```

##### `ResetPostgresHomogeneousConfig` <a name="ResetPostgresHomogeneousConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetPostgresHomogeneousConfig"></a>

```go
func ResetPostgresHomogeneousConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReverseSshConnectivity` <a name="ResetReverseSshConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity"></a>

```go
func ResetReverseSshConnectivity()
```

##### `ResetStaticIpConnectivity` <a name="ResetStaticIpConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity"></a>

```go
func ResetStaticIpConnectivity()
```

##### `ResetStopOnWarnings` <a name="ResetStopOnWarnings" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetStopOnWarnings"></a>

```go
func ResetStopOnWarnings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcPeeringConnectivity` <a name="ResetVpcPeeringConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity"></a>

```go
func ResetVpcPeeringConnectivity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatabaseMigrationServiceMigrationJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatabaseMigrationServiceMigrationJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseMigrationServiceMigrationJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseMigrationServiceMigrationJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationServiceMigrationJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlags">DumpFlags</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList">DatabaseMigrationServiceMigrationJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.objectsConfig">ObjectsConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfig">PerformanceConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.phase">Phase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.postgresHomogeneousConfig">PostgresHomogeneousConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity">ReverseSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivity">StaticIpConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference">DatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity">VpcPeeringConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlagsInput">DumpFlagsInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPathInput">DumpPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpTypeInput">DumpTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobIdInput">MigrationJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.objectsConfigInput">ObjectsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfigInput">PerformanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.postgresHomogeneousConfigInput">PostgresHomogeneousConfigInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput">ReverseSshConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput">StaticIpConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.stopOnWarningsInput">StopOnWarningsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput">VpcPeeringConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPath">DumpPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpType">DumpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobId">MigrationJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.stopOnWarnings">StopOnWarnings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DumpFlags`<sup>Required</sup> <a name="DumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlags"></a>

```go
func DumpFlags() DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.error"></a>

```go
func Error() DatabaseMigrationServiceMigrationJobErrorList
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList">DatabaseMigrationServiceMigrationJobErrorList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectsConfig`<sup>Required</sup> <a name="ObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.objectsConfig"></a>

```go
func ObjectsConfig() DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference</a>

---

##### `PerformanceConfig`<sup>Required</sup> <a name="PerformanceConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfig"></a>

```go
func PerformanceConfig() DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a>

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.phase"></a>

```go
func Phase() *string
```

- *Type:* *string

---

##### `PostgresHomogeneousConfig`<sup>Required</sup> <a name="PostgresHomogeneousConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.postgresHomogeneousConfig"></a>

```go
func PostgresHomogeneousConfig() DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference</a>

---

##### `ReverseSshConnectivity`<sup>Required</sup> <a name="ReverseSshConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity"></a>

```go
func ReverseSshConnectivity() DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StaticIpConnectivity`<sup>Required</sup> <a name="StaticIpConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivity"></a>

```go
func StaticIpConnectivity() DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeouts"></a>

```go
func Timeouts() DatabaseMigrationServiceMigrationJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference">DatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a>

---

##### `VpcPeeringConnectivity`<sup>Required</sup> <a name="VpcPeeringConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity"></a>

```go
func VpcPeeringConnectivity() DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DumpFlagsInput`<sup>Optional</sup> <a name="DumpFlagsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlagsInput"></a>

```go
func DumpFlagsInput() DatabaseMigrationServiceMigrationJobDumpFlags
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `DumpPathInput`<sup>Optional</sup> <a name="DumpPathInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPathInput"></a>

```go
func DumpPathInput() *string
```

- *Type:* *string

---

##### `DumpTypeInput`<sup>Optional</sup> <a name="DumpTypeInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpTypeInput"></a>

```go
func DumpTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MigrationJobIdInput`<sup>Optional</sup> <a name="MigrationJobIdInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobIdInput"></a>

```go
func MigrationJobIdInput() *string
```

- *Type:* *string

---

##### `ObjectsConfigInput`<sup>Optional</sup> <a name="ObjectsConfigInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.objectsConfigInput"></a>

```go
func ObjectsConfigInput() DatabaseMigrationServiceMigrationJobObjectsConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a>

---

##### `PerformanceConfigInput`<sup>Optional</sup> <a name="PerformanceConfigInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfigInput"></a>

```go
func PerformanceConfigInput() DatabaseMigrationServiceMigrationJobPerformanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `PostgresHomogeneousConfigInput`<sup>Optional</sup> <a name="PostgresHomogeneousConfigInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.postgresHomogeneousConfigInput"></a>

```go
func PostgresHomogeneousConfigInput() DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReverseSshConnectivityInput`<sup>Optional</sup> <a name="ReverseSshConnectivityInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput"></a>

```go
func ReverseSshConnectivityInput() DatabaseMigrationServiceMigrationJobReverseSshConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `StaticIpConnectivityInput`<sup>Optional</sup> <a name="StaticIpConnectivityInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput"></a>

```go
func StaticIpConnectivityInput() DatabaseMigrationServiceMigrationJobStaticIpConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `StopOnWarningsInput`<sup>Optional</sup> <a name="StopOnWarningsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.stopOnWarningsInput"></a>

```go
func StopOnWarningsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VpcPeeringConnectivityInput`<sup>Optional</sup> <a name="VpcPeeringConnectivityInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput"></a>

```go
func VpcPeeringConnectivityInput() DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DumpPath`<sup>Required</sup> <a name="DumpPath" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPath"></a>

```go
func DumpPath() *string
```

- *Type:* *string

---

##### `DumpType`<sup>Required</sup> <a name="DumpType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpType"></a>

```go
func DumpType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MigrationJobId`<sup>Required</sup> <a name="MigrationJobId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobId"></a>

```go
func MigrationJobId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `StopOnWarnings`<sup>Required</sup> <a name="StopOnWarnings" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.stopOnWarnings"></a>

```go
func StopOnWarnings() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationServiceMigrationJobConfig <a name="DatabaseMigrationServiceMigrationJobConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Destination: *string,
	MigrationJobId: *string,
	Source: *string,
	Type: *string,
	DeletionPolicy: *string,
	DesiredState: *string,
	DisplayName: *string,
	DumpFlags: github.com/cdktn-io/cdktn-provider-google-go/google/v19.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags,
	DumpPath: *string,
	DumpType: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	ObjectsConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig,
	PerformanceConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig,
	PostgresHomogeneousConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig,
	Project: *string,
	ReverseSshConnectivity: github.com/cdktn-io/cdktn-provider-google-go/google/v19.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity,
	StaticIpConnectivity: github.com/cdktn-io/cdktn-provider-google-go/google/v19.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity,
	StopOnWarnings: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts,
	VpcPeeringConnectivity: github.com/cdktn-io/cdktn-provider-google-go/google/v19.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.destination">Destination</a></code> | <code>*string</code> | The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.migrationJobId">MigrationJobId</a></code> | <code>*string</code> | The ID of the migration job. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.source">Source</a></code> | <code>*string</code> | The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.type">Type</a></code> | <code>*string</code> | The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"]. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.desiredState">DesiredState</a></code> | <code>*string</code> | The desired state of the migration job. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The migration job display name. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpFlags">DumpFlags</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a></code> | dump_flags block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpPath">DumpPath</a></code> | <code>*string</code> | The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpType">DumpType</a></code> | <code>*string</code> | The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"]. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#id DatabaseMigrationServiceMigrationJob#id}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.location">Location</a></code> | <code>*string</code> | The location where the migration job should reside. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.objectsConfig">ObjectsConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a></code> | objects_config block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.performanceConfig">PerformanceConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.postgresHomogeneousConfig">PostgresHomogeneousConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a></code> | postgres_homogeneous_config block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#project DatabaseMigrationServiceMigrationJob#project}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity">ReverseSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | reverse_ssh_connectivity block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity">StaticIpConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | static_ip_connectivity block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.stopOnWarnings">StopOnWarnings</a></code> | <code>interface{}</code> | If set to true, will stop the Terraform apply if there are validation warnings. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity">VpcPeeringConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | vpc_peering_connectivity block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#destination DatabaseMigrationServiceMigrationJob#destination}

---

##### `MigrationJobId`<sup>Required</sup> <a name="MigrationJobId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.migrationJobId"></a>

```go
MigrationJobId *string
```

- *Type:* *string

The ID of the migration job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#migration_job_id DatabaseMigrationServiceMigrationJob#migration_job_id}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#source DatabaseMigrationServiceMigrationJob#source}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#type DatabaseMigrationServiceMigrationJob#type}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#deletion_policy DatabaseMigrationServiceMigrationJob#deletion_policy}

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

The desired state of the migration job.

If set to 'RUNNING', the migration job will be started. Possible values: ["NOT_STARTED", "RUNNING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#desired_state DatabaseMigrationServiceMigrationJob#desired_state}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The migration job display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#display_name DatabaseMigrationServiceMigrationJob#display_name}

---

##### `DumpFlags`<sup>Optional</sup> <a name="DumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpFlags"></a>

```go
DumpFlags DatabaseMigrationServiceMigrationJobDumpFlags
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#dump_flags DatabaseMigrationServiceMigrationJob#dump_flags}

---

##### `DumpPath`<sup>Optional</sup> <a name="DumpPath" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpPath"></a>

```go
DumpPath *string
```

- *Type:* *string

The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).

This field and the "dump_flags" field are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#dump_path DatabaseMigrationServiceMigrationJob#dump_path}

---

##### `DumpType`<sup>Optional</sup> <a name="DumpType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpType"></a>

```go
DumpType *string
```

- *Type:* *string

The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#dump_type DatabaseMigrationServiceMigrationJob#dump_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#id DatabaseMigrationServiceMigrationJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#labels DatabaseMigrationServiceMigrationJob#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the migration job should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#location DatabaseMigrationServiceMigrationJob#location}

---

##### `ObjectsConfig`<sup>Optional</sup> <a name="ObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.objectsConfig"></a>

```go
ObjectsConfig DatabaseMigrationServiceMigrationJobObjectsConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a>

objects_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#objects_config DatabaseMigrationServiceMigrationJob#objects_config}

---

##### `PerformanceConfig`<sup>Optional</sup> <a name="PerformanceConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.performanceConfig"></a>

```go
PerformanceConfig DatabaseMigrationServiceMigrationJobPerformanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#performance_config DatabaseMigrationServiceMigrationJob#performance_config}

---

##### `PostgresHomogeneousConfig`<sup>Optional</sup> <a name="PostgresHomogeneousConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.postgresHomogeneousConfig"></a>

```go
PostgresHomogeneousConfig DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a>

postgres_homogeneous_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#postgres_homogeneous_config DatabaseMigrationServiceMigrationJob#postgres_homogeneous_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#project DatabaseMigrationServiceMigrationJob#project}.

---

##### `ReverseSshConnectivity`<sup>Optional</sup> <a name="ReverseSshConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity"></a>

```go
ReverseSshConnectivity DatabaseMigrationServiceMigrationJobReverseSshConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

reverse_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#reverse_ssh_connectivity DatabaseMigrationServiceMigrationJob#reverse_ssh_connectivity}

---

##### `StaticIpConnectivity`<sup>Optional</sup> <a name="StaticIpConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity"></a>

```go
StaticIpConnectivity DatabaseMigrationServiceMigrationJobStaticIpConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

static_ip_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#static_ip_connectivity DatabaseMigrationServiceMigrationJob#static_ip_connectivity}

---

##### `StopOnWarnings`<sup>Optional</sup> <a name="StopOnWarnings" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.stopOnWarnings"></a>

```go
StopOnWarnings interface{}
```

- *Type:* interface{}

If set to true, will stop the Terraform apply if there are validation warnings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#stop_on_warnings DatabaseMigrationServiceMigrationJob#stop_on_warnings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.timeouts"></a>

```go
Timeouts DatabaseMigrationServiceMigrationJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#timeouts DatabaseMigrationServiceMigrationJob#timeouts}

---

##### `VpcPeeringConnectivity`<sup>Optional</sup> <a name="VpcPeeringConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity"></a>

```go
VpcPeeringConnectivity DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

vpc_peering_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vpc_peering_connectivity DatabaseMigrationServiceMigrationJob#vpc_peering_connectivity}

---

### DatabaseMigrationServiceMigrationJobDumpFlags <a name="DatabaseMigrationServiceMigrationJobDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobDumpFlags {
	DumpFlags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags">DumpFlags</a></code> | <code>interface{}</code> | dump_flags block. |

---

##### `DumpFlags`<sup>Optional</sup> <a name="DumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags"></a>

```go
DumpFlags interface{}
```

- *Type:* interface{}

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#dump_flags DatabaseMigrationServiceMigrationJob#dump_flags}

---

### DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags <a name="DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name">Name</a></code> | <code>*string</code> | The name of the flag. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value">Value</a></code> | <code>*string</code> | The vale of the flag. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#name DatabaseMigrationServiceMigrationJob#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The vale of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#value DatabaseMigrationServiceMigrationJob#value}

---

### DatabaseMigrationServiceMigrationJobError <a name="DatabaseMigrationServiceMigrationJobError" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobError {

}
```


### DatabaseMigrationServiceMigrationJobObjectsConfig <a name="DatabaseMigrationServiceMigrationJobObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobObjectsConfig {
	SourceObjectsConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig.property.sourceObjectsConfig">SourceObjectsConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a></code> | source_objects_config block. |

---

##### `SourceObjectsConfig`<sup>Optional</sup> <a name="SourceObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig.property.sourceObjectsConfig"></a>

```go
SourceObjectsConfig DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a>

source_objects_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#source_objects_config DatabaseMigrationServiceMigrationJob#source_objects_config}

---

### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig {
	ObjectConfigs: interface{},
	ObjectsSelectionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig.property.objectConfigs">ObjectConfigs</a></code> | <code>interface{}</code> | object_configs block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig.property.objectsSelectionType">ObjectsSelectionType</a></code> | <code>*string</code> | The objects selection type of the migration job. |

---

##### `ObjectConfigs`<sup>Optional</sup> <a name="ObjectConfigs" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig.property.objectConfigs"></a>

```go
ObjectConfigs interface{}
```

- *Type:* interface{}

object_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#object_configs DatabaseMigrationServiceMigrationJob#object_configs}

---

##### `ObjectsSelectionType`<sup>Optional</sup> <a name="ObjectsSelectionType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig.property.objectsSelectionType"></a>

```go
ObjectsSelectionType *string
```

- *Type:* *string

The objects selection type of the migration job.

When set to
'SPECIFIED_OBJECTS', only the objects listed in 'objectConfigs' are
migrated. When set to 'ALL_OBJECTS', all objects available on the
source are migrated. Possible values: ["ALL_OBJECTS", "SPECIFIED_OBJECTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#objects_selection_type DatabaseMigrationServiceMigrationJob#objects_selection_type}

---

### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs {
	ObjectIdentifier: github.com/cdktn-io/cdktn-provider-google-go/google/v19.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs.property.objectIdentifier">ObjectIdentifier</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a></code> | object_identifier block. |

---

##### `ObjectIdentifier`<sup>Optional</sup> <a name="ObjectIdentifier" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs.property.objectIdentifier"></a>

```go
ObjectIdentifier DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a>

object_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#object_identifier DatabaseMigrationServiceMigrationJob#object_identifier}

---

### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier {
	Type: *string,
	Database: *string,
	Schema: *string,
	Table: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.type">Type</a></code> | <code>*string</code> | The category of the migration job object: 'DATABASE', 'SCHEMA', or 'TABLE'. Possible values: ["DATABASE", "SCHEMA", "TABLE"]. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.database">Database</a></code> | <code>*string</code> | The database name. Required only if the object uses a database name as part of its unique identifier. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.schema">Schema</a></code> | <code>*string</code> | The schema name. Required only if the object uses a schema name as part of its unique identifier. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.table">Table</a></code> | <code>*string</code> | The table name. Required only if the object is a level below database or schema. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.type"></a>

```go
Type *string
```

- *Type:* *string

The category of the migration job object: 'DATABASE', 'SCHEMA', or 'TABLE'. Possible values: ["DATABASE", "SCHEMA", "TABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#type DatabaseMigrationServiceMigrationJob#type}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database name. Required only if the object uses a database name as part of its unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#database DatabaseMigrationServiceMigrationJob#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema name. Required only if the object uses a schema name as part of its unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#schema DatabaseMigrationServiceMigrationJob#schema}

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.table"></a>

```go
Table *string
```

- *Type:* *string

The table name. Required only if the object is a level below database or schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#table DatabaseMigrationServiceMigrationJob#table}

---

### DatabaseMigrationServiceMigrationJobPerformanceConfig <a name="DatabaseMigrationServiceMigrationJobPerformanceConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobPerformanceConfig {
	DumpParallelLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel">DumpParallelLevel</a></code> | <code>*string</code> | Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"]. |

---

##### `DumpParallelLevel`<sup>Optional</sup> <a name="DumpParallelLevel" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel"></a>

```go
DumpParallelLevel *string
```

- *Type:* *string

Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#dump_parallel_level DatabaseMigrationServiceMigrationJob#dump_parallel_level}

---

### DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig <a name="DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig {
	IsNativeLogical: interface{},
	MaxAdditionalSubscriptions: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig.property.isNativeLogical">IsNativeLogical</a></code> | <code>interface{}</code> | Whether the migration uses native logical replication. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig.property.maxAdditionalSubscriptions">MaxAdditionalSubscriptions</a></code> | <code>*f64</code> | Maximum number of additional subscriptions to use for the migration job. |

---

##### `IsNativeLogical`<sup>Required</sup> <a name="IsNativeLogical" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig.property.isNativeLogical"></a>

```go
IsNativeLogical interface{}
```

- *Type:* interface{}

Whether the migration uses native logical replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#is_native_logical DatabaseMigrationServiceMigrationJob#is_native_logical}

---

##### `MaxAdditionalSubscriptions`<sup>Optional</sup> <a name="MaxAdditionalSubscriptions" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig.property.maxAdditionalSubscriptions"></a>

```go
MaxAdditionalSubscriptions *f64
```

- *Type:* *f64

Maximum number of additional subscriptions to use for the migration job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#max_additional_subscriptions DatabaseMigrationServiceMigrationJob#max_additional_subscriptions}

---

### DatabaseMigrationServiceMigrationJobReverseSshConnectivity <a name="DatabaseMigrationServiceMigrationJobReverseSshConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity {
	Vm: *string,
	VmIp: *string,
	VmPort: *f64,
	Vpc: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm">Vm</a></code> | <code>*string</code> | The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp">VmIp</a></code> | <code>*string</code> | The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort">VmPort</a></code> | <code>*f64</code> | The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc">Vpc</a></code> | <code>*string</code> | The name of the VPC to peer with the Cloud SQL private network. |

---

##### `Vm`<sup>Optional</sup> <a name="Vm" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm"></a>

```go
Vm *string
```

- *Type:* *string

The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vm DatabaseMigrationServiceMigrationJob#vm}

---

##### `VmIp`<sup>Optional</sup> <a name="VmIp" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp"></a>

```go
VmIp *string
```

- *Type:* *string

The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vm_ip DatabaseMigrationServiceMigrationJob#vm_ip}

---

##### `VmPort`<sup>Optional</sup> <a name="VmPort" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort"></a>

```go
VmPort *f64
```

- *Type:* *f64

The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vm_port DatabaseMigrationServiceMigrationJob#vm_port}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc"></a>

```go
Vpc *string
```

- *Type:* *string

The name of the VPC to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vpc DatabaseMigrationServiceMigrationJob#vpc}

---

### DatabaseMigrationServiceMigrationJobStaticIpConnectivity <a name="DatabaseMigrationServiceMigrationJobStaticIpConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity {

}
```


### DatabaseMigrationServiceMigrationJobTimeouts <a name="DatabaseMigrationServiceMigrationJobTimeouts" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#create DatabaseMigrationServiceMigrationJob#create}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#delete DatabaseMigrationServiceMigrationJob#delete}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#update DatabaseMigrationServiceMigrationJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#create DatabaseMigrationServiceMigrationJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#delete DatabaseMigrationServiceMigrationJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#update DatabaseMigrationServiceMigrationJob#update}.

---

### DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity <a name="DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

&databasemigrationservicemigrationjob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity {
	Vpc: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc">Vpc</a></code> | <code>*string</code> | The name of the VPC network to peer with the Cloud SQL private network. |

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc"></a>

```go
Vpc *string
```

- *Type:* *string

The name of the VPC network to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vpc DatabaseMigrationServiceMigrationJob#vpc}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList <a name="DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get"></a>

```go
func Get(index *f64) DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference <a name="DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference <a name="DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags">PutDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags">ResetDumpFlags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDumpFlags` <a name="PutDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags"></a>

```go
func PutDumpFlags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDumpFlags` <a name="ResetDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags"></a>

```go
func ResetDumpFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags">DumpFlags</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput">DumpFlagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DumpFlags`<sup>Required</sup> <a name="DumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags"></a>

```go
func DumpFlags() DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a>

---

##### `DumpFlagsInput`<sup>Optional</sup> <a name="DumpFlagsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput"></a>

```go
func DumpFlagsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceMigrationJobDumpFlags
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

---


### DatabaseMigrationServiceMigrationJobErrorList <a name="DatabaseMigrationServiceMigrationJobErrorList" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMigrationServiceMigrationJobErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.get"></a>

```go
func Get(index *f64) DatabaseMigrationServiceMigrationJobErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseMigrationServiceMigrationJobErrorOutputReference <a name="DatabaseMigrationServiceMigrationJobErrorOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMigrationServiceMigrationJobErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.details">Details</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError">DatabaseMigrationServiceMigrationJobError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.details"></a>

```go
func Details() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceMigrationJobError
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError">DatabaseMigrationServiceMigrationJobError</a>

---


### DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference <a name="DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobObjectsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.putSourceObjectsConfig">PutSourceObjectsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.resetSourceObjectsConfig">ResetSourceObjectsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceObjectsConfig` <a name="PutSourceObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.putSourceObjectsConfig"></a>

```go
func PutSourceObjectsConfig(value DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.putSourceObjectsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a>

---

##### `ResetSourceObjectsConfig` <a name="ResetSourceObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.resetSourceObjectsConfig"></a>

```go
func ResetSourceObjectsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.sourceObjectsConfig">SourceObjectsConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.sourceObjectsConfigInput">SourceObjectsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceObjectsConfig`<sup>Required</sup> <a name="SourceObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.sourceObjectsConfig"></a>

```go
func SourceObjectsConfig() DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference</a>

---

##### `SourceObjectsConfigInput`<sup>Optional</sup> <a name="SourceObjectsConfigInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.sourceObjectsConfigInput"></a>

```go
func SourceObjectsConfigInput() DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceMigrationJobObjectsConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a>

---


### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.get"></a>

```go
func Get(index *f64) DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetTable">ResetTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetTable` <a name="ResetTable" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetTable"></a>

```go
func ResetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.tableInput">TableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.tableInput"></a>

```go
func TableInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a>

---


### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.putObjectIdentifier">PutObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.resetObjectIdentifier">ResetObjectIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectIdentifier` <a name="PutObjectIdentifier" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.putObjectIdentifier"></a>

```go
func PutObjectIdentifier(value DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.putObjectIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a>

---

##### `ResetObjectIdentifier` <a name="ResetObjectIdentifier" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.resetObjectIdentifier"></a>

```go
func ResetObjectIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.objectIdentifier">ObjectIdentifier</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.objectIdentifierInput">ObjectIdentifierInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdentifier`<sup>Required</sup> <a name="ObjectIdentifier" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.objectIdentifier"></a>

```go
func ObjectIdentifier() DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference</a>

---

##### `ObjectIdentifierInput`<sup>Optional</sup> <a name="ObjectIdentifierInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.objectIdentifierInput"></a>

```go
func ObjectIdentifierInput() DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.putObjectConfigs">PutObjectConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resetObjectConfigs">ResetObjectConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resetObjectsSelectionType">ResetObjectsSelectionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectConfigs` <a name="PutObjectConfigs" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.putObjectConfigs"></a>

```go
func PutObjectConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.putObjectConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetObjectConfigs` <a name="ResetObjectConfigs" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resetObjectConfigs"></a>

```go
func ResetObjectConfigs()
```

##### `ResetObjectsSelectionType` <a name="ResetObjectsSelectionType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resetObjectsSelectionType"></a>

```go
func ResetObjectsSelectionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectConfigs">ObjectConfigs</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectConfigsInput">ObjectConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectsSelectionTypeInput">ObjectsSelectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectsSelectionType">ObjectsSelectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectConfigs`<sup>Required</sup> <a name="ObjectConfigs" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectConfigs"></a>

```go
func ObjectConfigs() DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList</a>

---

##### `ObjectConfigsInput`<sup>Optional</sup> <a name="ObjectConfigsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectConfigsInput"></a>

```go
func ObjectConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectsSelectionTypeInput`<sup>Optional</sup> <a name="ObjectsSelectionTypeInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectsSelectionTypeInput"></a>

```go
func ObjectsSelectionTypeInput() *string
```

- *Type:* *string

---

##### `ObjectsSelectionType`<sup>Required</sup> <a name="ObjectsSelectionType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectsSelectionType"></a>

```go
func ObjectsSelectionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a>

---


### DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference <a name="DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel">ResetDumpParallelLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDumpParallelLevel` <a name="ResetDumpParallelLevel" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel"></a>

```go
func ResetDumpParallelLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput">DumpParallelLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel">DumpParallelLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DumpParallelLevelInput`<sup>Optional</sup> <a name="DumpParallelLevelInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput"></a>

```go
func DumpParallelLevelInput() *string
```

- *Type:* *string

---

##### `DumpParallelLevel`<sup>Required</sup> <a name="DumpParallelLevel" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel"></a>

```go
func DumpParallelLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceMigrationJobPerformanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---


### DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference <a name="DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.resetMaxAdditionalSubscriptions">ResetMaxAdditionalSubscriptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxAdditionalSubscriptions` <a name="ResetMaxAdditionalSubscriptions" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.resetMaxAdditionalSubscriptions"></a>

```go
func ResetMaxAdditionalSubscriptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.isNativeLogicalInput">IsNativeLogicalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.maxAdditionalSubscriptionsInput">MaxAdditionalSubscriptionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.isNativeLogical">IsNativeLogical</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.maxAdditionalSubscriptions">MaxAdditionalSubscriptions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsNativeLogicalInput`<sup>Optional</sup> <a name="IsNativeLogicalInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.isNativeLogicalInput"></a>

```go
func IsNativeLogicalInput() interface{}
```

- *Type:* interface{}

---

##### `MaxAdditionalSubscriptionsInput`<sup>Optional</sup> <a name="MaxAdditionalSubscriptionsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.maxAdditionalSubscriptionsInput"></a>

```go
func MaxAdditionalSubscriptionsInput() *f64
```

- *Type:* *f64

---

##### `IsNativeLogical`<sup>Required</sup> <a name="IsNativeLogical" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.isNativeLogical"></a>

```go
func IsNativeLogical() interface{}
```

- *Type:* interface{}

---

##### `MaxAdditionalSubscriptions`<sup>Required</sup> <a name="MaxAdditionalSubscriptions" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.maxAdditionalSubscriptions"></a>

```go
func MaxAdditionalSubscriptions() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a>

---


### DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference <a name="DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm">ResetVm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp">ResetVmIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort">ResetVmPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVm` <a name="ResetVm" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm"></a>

```go
func ResetVm()
```

##### `ResetVmIp` <a name="ResetVmIp" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp"></a>

```go
func ResetVmIp()
```

##### `ResetVmPort` <a name="ResetVmPort" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort"></a>

```go
func ResetVmPort()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc"></a>

```go
func ResetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput">VmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput">VmIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput">VmPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput">VpcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm">Vm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp">VmIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort">VmPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc">Vpc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VmInput`<sup>Optional</sup> <a name="VmInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput"></a>

```go
func VmInput() *string
```

- *Type:* *string

---

##### `VmIpInput`<sup>Optional</sup> <a name="VmIpInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput"></a>

```go
func VmIpInput() *string
```

- *Type:* *string

---

##### `VmPortInput`<sup>Optional</sup> <a name="VmPortInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput"></a>

```go
func VmPortInput() *f64
```

- *Type:* *f64

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput"></a>

```go
func VpcInput() *string
```

- *Type:* *string

---

##### `Vm`<sup>Required</sup> <a name="Vm" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm"></a>

```go
func Vm() *string
```

- *Type:* *string

---

##### `VmIp`<sup>Required</sup> <a name="VmIp" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp"></a>

```go
func VmIp() *string
```

- *Type:* *string

---

##### `VmPort`<sup>Required</sup> <a name="VmPort" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort"></a>

```go
func VmPort() *f64
```

- *Type:* *f64

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc"></a>

```go
func Vpc() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceMigrationJobReverseSshConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---


### DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference <a name="DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceMigrationJobStaticIpConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---


### DatabaseMigrationServiceMigrationJobTimeoutsOutputReference <a name="DatabaseMigrationServiceMigrationJobTimeoutsOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceMigrationJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference <a name="DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/databasemigrationservicemigrationjob"

databasemigrationservicemigrationjob.NewDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc"></a>

```go
func ResetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput">VpcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc">Vpc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput"></a>

```go
func VpcInput() *string
```

- *Type:* *string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc"></a>

```go
func Vpc() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---



