# `datastreamConnectionProfile` Submodule <a name="`datastreamConnectionProfile` Submodule" id="@cdktn/provider-google.datastreamConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastreamConnectionProfile <a name="DatastreamConnectionProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile google_datastream_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfile(scope Construct, id *string, config DatastreamConnectionProfileConfig) DatastreamConnectionProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig">DatastreamConnectionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig">DatastreamConnectionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile">PutBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity">PutForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile">PutGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMongodbProfile">PutMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile">PutMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile">PutOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile">PutPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity">PutPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putSqlServerProfile">PutSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile">ResetBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetCreateWithoutValidation">ResetCreateWithoutValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity">ResetForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile">ResetGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMongodbProfile">ResetMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile">ResetMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile">ResetOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile">ResetPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity">ResetPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetSqlServerProfile">ResetSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigqueryProfile` <a name="PutBigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile"></a>

```go
func PutBigqueryProfile(value DatastreamConnectionProfileBigqueryProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---

##### `PutForwardSshConnectivity` <a name="PutForwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity"></a>

```go
func PutForwardSshConnectivity(value DatastreamConnectionProfileForwardSshConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `PutGcsProfile` <a name="PutGcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile"></a>

```go
func PutGcsProfile(value DatastreamConnectionProfileGcsProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---

##### `PutMongodbProfile` <a name="PutMongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMongodbProfile"></a>

```go
func PutMongodbProfile(value DatastreamConnectionProfileMongodbProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMongodbProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

---

##### `PutMysqlProfile` <a name="PutMysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile"></a>

```go
func PutMysqlProfile(value DatastreamConnectionProfileMysqlProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---

##### `PutOracleProfile` <a name="PutOracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile"></a>

```go
func PutOracleProfile(value DatastreamConnectionProfileOracleProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---

##### `PutPostgresqlProfile` <a name="PutPostgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile"></a>

```go
func PutPostgresqlProfile(value DatastreamConnectionProfilePostgresqlProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---

##### `PutPrivateConnectivity` <a name="PutPrivateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity"></a>

```go
func PutPrivateConnectivity(value DatastreamConnectionProfilePrivateConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---

##### `PutSqlServerProfile` <a name="PutSqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putSqlServerProfile"></a>

```go
func PutSqlServerProfile(value DatastreamConnectionProfileSqlServerProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putSqlServerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts"></a>

```go
func PutTimeouts(value DatastreamConnectionProfileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

---

##### `ResetBigqueryProfile` <a name="ResetBigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile"></a>

```go
func ResetBigqueryProfile()
```

##### `ResetCreateWithoutValidation` <a name="ResetCreateWithoutValidation" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetCreateWithoutValidation"></a>

```go
func ResetCreateWithoutValidation()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetForwardSshConnectivity` <a name="ResetForwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity"></a>

```go
func ResetForwardSshConnectivity()
```

##### `ResetGcsProfile` <a name="ResetGcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile"></a>

```go
func ResetGcsProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMongodbProfile` <a name="ResetMongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMongodbProfile"></a>

```go
func ResetMongodbProfile()
```

##### `ResetMysqlProfile` <a name="ResetMysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile"></a>

```go
func ResetMysqlProfile()
```

##### `ResetOracleProfile` <a name="ResetOracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile"></a>

```go
func ResetOracleProfile()
```

##### `ResetPostgresqlProfile` <a name="ResetPostgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile"></a>

```go
func ResetPostgresqlProfile()
```

##### `ResetPrivateConnectivity` <a name="ResetPrivateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity"></a>

```go
func ResetPrivateConnectivity()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSqlServerProfile` <a name="ResetSqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetSqlServerProfile"></a>

```go
func ResetSqlServerProfile()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatastreamConnectionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.DatastreamConnectionProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.DatastreamConnectionProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.DatastreamConnectionProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.DatastreamConnectionProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatastreamConnectionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatastreamConnectionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatastreamConnectionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatastreamConnectionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile">BigqueryProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity">ForwardSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile">GcsProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfile">MongodbProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference">DatastreamConnectionProfileMongodbProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile">MysqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile">OracleProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile">PostgresqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity">PrivateConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfile">SqlServerProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference">DatastreamConnectionProfileSqlServerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput">BigqueryProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput">ConnectionProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidationInput">CreateWithoutValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput">ForwardSshConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput">GcsProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfileInput">MongodbProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput">MysqlProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput">OracleProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput">PostgresqlProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput">PrivateConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfileInput">SqlServerProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId">ConnectionProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidation">CreateWithoutValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigqueryProfile`<sup>Required</sup> <a name="BigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile"></a>

```go
func BigqueryProfile() DatastreamConnectionProfileBigqueryProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ForwardSshConnectivity`<sup>Required</sup> <a name="ForwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity"></a>

```go
func ForwardSshConnectivity() DatastreamConnectionProfileForwardSshConnectivityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a>

---

##### `GcsProfile`<sup>Required</sup> <a name="GcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile"></a>

```go
func GcsProfile() DatastreamConnectionProfileGcsProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a>

---

##### `MongodbProfile`<sup>Required</sup> <a name="MongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfile"></a>

```go
func MongodbProfile() DatastreamConnectionProfileMongodbProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference">DatastreamConnectionProfileMongodbProfileOutputReference</a>

---

##### `MysqlProfile`<sup>Required</sup> <a name="MysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile"></a>

```go
func MysqlProfile() DatastreamConnectionProfileMysqlProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OracleProfile`<sup>Required</sup> <a name="OracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile"></a>

```go
func OracleProfile() DatastreamConnectionProfileOracleProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a>

---

##### `PostgresqlProfile`<sup>Required</sup> <a name="PostgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile"></a>

```go
func PostgresqlProfile() DatastreamConnectionProfilePostgresqlProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a>

---

##### `PrivateConnectivity`<sup>Required</sup> <a name="PrivateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity"></a>

```go
func PrivateConnectivity() DatastreamConnectionProfilePrivateConnectivityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a>

---

##### `SqlServerProfile`<sup>Required</sup> <a name="SqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfile"></a>

```go
func SqlServerProfile() DatastreamConnectionProfileSqlServerProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference">DatastreamConnectionProfileSqlServerProfileOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts"></a>

```go
func Timeouts() DatastreamConnectionProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a>

---

##### `BigqueryProfileInput`<sup>Optional</sup> <a name="BigqueryProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput"></a>

```go
func BigqueryProfileInput() DatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---

##### `ConnectionProfileIdInput`<sup>Optional</sup> <a name="ConnectionProfileIdInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput"></a>

```go
func ConnectionProfileIdInput() *string
```

- *Type:* *string

---

##### `CreateWithoutValidationInput`<sup>Optional</sup> <a name="CreateWithoutValidationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidationInput"></a>

```go
func CreateWithoutValidationInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ForwardSshConnectivityInput`<sup>Optional</sup> <a name="ForwardSshConnectivityInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput"></a>

```go
func ForwardSshConnectivityInput() DatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `GcsProfileInput`<sup>Optional</sup> <a name="GcsProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput"></a>

```go
func GcsProfileInput() DatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MongodbProfileInput`<sup>Optional</sup> <a name="MongodbProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfileInput"></a>

```go
func MongodbProfileInput() DatastreamConnectionProfileMongodbProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

---

##### `MysqlProfileInput`<sup>Optional</sup> <a name="MysqlProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput"></a>

```go
func MysqlProfileInput() DatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---

##### `OracleProfileInput`<sup>Optional</sup> <a name="OracleProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput"></a>

```go
func OracleProfileInput() DatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---

##### `PostgresqlProfileInput`<sup>Optional</sup> <a name="PostgresqlProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput"></a>

```go
func PostgresqlProfileInput() DatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---

##### `PrivateConnectivityInput`<sup>Optional</sup> <a name="PrivateConnectivityInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput"></a>

```go
func PrivateConnectivityInput() DatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SqlServerProfileInput`<sup>Optional</sup> <a name="SqlServerProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfileInput"></a>

```go
func SqlServerProfileInput() DatastreamConnectionProfileSqlServerProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionProfileId`<sup>Required</sup> <a name="ConnectionProfileId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId"></a>

```go
func ConnectionProfileId() *string
```

- *Type:* *string

---

##### `CreateWithoutValidation`<sup>Required</sup> <a name="CreateWithoutValidation" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidation"></a>

```go
func CreateWithoutValidation() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatastreamConnectionProfileBigqueryProfile <a name="DatastreamConnectionProfileBigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileBigqueryProfile {

}
```


### DatastreamConnectionProfileConfig <a name="DatastreamConnectionProfileConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionProfileId: *string,
	DisplayName: *string,
	Location: *string,
	BigqueryProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile,
	CreateWithoutValidation: interface{},
	DeletionPolicy: *string,
	ForwardSshConnectivity: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity,
	GcsProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile,
	Id: *string,
	Labels: *map[string]*string,
	MongodbProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile,
	MysqlProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile,
	OracleProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile,
	PostgresqlProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile,
	PrivateConnectivity: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity,
	Project: *string,
	SqlServerProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId">ConnectionProfileId</a></code> | <code>*string</code> | The connection profile identifier. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile">BigqueryProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.createWithoutValidation">CreateWithoutValidation</a></code> | <code>interface{}</code> | Create the connection profile without validating it. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity">ForwardSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile">GcsProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mongodbProfile">MongodbProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a></code> | mongodb_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile">MysqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile">OracleProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile">PostgresqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity">PrivateConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.sqlServerProfile">SqlServerProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a></code> | sql_server_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionProfileId`<sup>Required</sup> <a name="ConnectionProfileId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId"></a>

```go
ConnectionProfileId *string
```

- *Type:* *string

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#connection_profile_id DatastreamConnectionProfile#connection_profile_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#display_name DatastreamConnectionProfile#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#location DatastreamConnectionProfile#location}

---

##### `BigqueryProfile`<sup>Optional</sup> <a name="BigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile"></a>

```go
BigqueryProfile DatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#bigquery_profile DatastreamConnectionProfile#bigquery_profile}

---

##### `CreateWithoutValidation`<sup>Optional</sup> <a name="CreateWithoutValidation" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.createWithoutValidation"></a>

```go
CreateWithoutValidation interface{}
```

- *Type:* interface{}

Create the connection profile without validating it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#create_without_validation DatastreamConnectionProfile#create_without_validation}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#deletion_policy DatastreamConnectionProfile#deletion_policy}

---

##### `ForwardSshConnectivity`<sup>Optional</sup> <a name="ForwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity"></a>

```go
ForwardSshConnectivity DatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#forward_ssh_connectivity DatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `GcsProfile`<sup>Optional</sup> <a name="GcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile"></a>

```go
GcsProfile DatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#gcs_profile DatastreamConnectionProfile#gcs_profile}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#labels DatastreamConnectionProfile#labels}

---

##### `MongodbProfile`<sup>Optional</sup> <a name="MongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mongodbProfile"></a>

```go
MongodbProfile DatastreamConnectionProfileMongodbProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

mongodb_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#mongodb_profile DatastreamConnectionProfile#mongodb_profile}

---

##### `MysqlProfile`<sup>Optional</sup> <a name="MysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile"></a>

```go
MysqlProfile DatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#mysql_profile DatastreamConnectionProfile#mysql_profile}

---

##### `OracleProfile`<sup>Optional</sup> <a name="OracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile"></a>

```go
OracleProfile DatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#oracle_profile DatastreamConnectionProfile#oracle_profile}

---

##### `PostgresqlProfile`<sup>Optional</sup> <a name="PostgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile"></a>

```go
PostgresqlProfile DatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#postgresql_profile DatastreamConnectionProfile#postgresql_profile}

---

##### `PrivateConnectivity`<sup>Optional</sup> <a name="PrivateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity"></a>

```go
PrivateConnectivity DatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#private_connectivity DatastreamConnectionProfile#private_connectivity}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}.

---

##### `SqlServerProfile`<sup>Optional</sup> <a name="SqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.sqlServerProfile"></a>

```go
SqlServerProfile DatastreamConnectionProfileSqlServerProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

sql_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#sql_server_profile DatastreamConnectionProfile#sql_server_profile}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts"></a>

```go
Timeouts DatastreamConnectionProfileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#timeouts DatastreamConnectionProfile#timeouts}

---

### DatastreamConnectionProfileForwardSshConnectivity <a name="DatastreamConnectionProfileForwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileForwardSshConnectivity {
	Hostname: *string,
	Username: *string,
	Password: *string,
	Port: *f64,
	PrivateKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username">Username</a></code> | <code>*string</code> | Username for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password">Password</a></code> | <code>*string</code> | SSH password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port">Port</a></code> | <code>*f64</code> | Port for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey">PrivateKey</a></code> | <code>*string</code> | SSH private key. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password"></a>

```go
Password *string
```

- *Type:* *string

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#private_key DatastreamConnectionProfile#private_key}

---

### DatastreamConnectionProfileGcsProfile <a name="DatastreamConnectionProfileGcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileGcsProfile {
	Bucket: *string,
	RootPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket">Bucket</a></code> | <code>*string</code> | The Cloud Storage bucket name. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath">RootPath</a></code> | <code>*string</code> | The root path inside the Cloud Storage bucket. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#bucket DatastreamConnectionProfile#bucket}

---

##### `RootPath`<sup>Optional</sup> <a name="RootPath" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath"></a>

```go
RootPath *string
```

- *Type:* *string

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#root_path DatastreamConnectionProfile#root_path}

---

### DatastreamConnectionProfileMongodbProfile <a name="DatastreamConnectionProfileMongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileMongodbProfile {
	HostAddresses: interface{},
	Username: *string,
	AdditionalOptions: *map[string]*string,
	Password: *string,
	ReplicaSet: *string,
	SecretManagerStoredPassword: *string,
	SrvConnectionFormat: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat,
	SslConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig,
	StandardConnectionFormat: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.hostAddresses">HostAddresses</a></code> | <code>interface{}</code> | host_addresses block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.username">Username</a></code> | <code>*string</code> | Username for the MongoDB connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.additionalOptions">AdditionalOptions</a></code> | <code>*map[string]*string</code> | A map of additional options for the MongoDB connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.password">Password</a></code> | <code>*string</code> | Password for the MongoDB connection. Mutually exclusive with secretManagerStoredPassword. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.replicaSet">ReplicaSet</a></code> | <code>*string</code> | Name of the replica set. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.secretManagerStoredPassword">SecretManagerStoredPassword</a></code> | <code>*string</code> | A reference to a Secret Manager resource name storing the MongoDB connection password. Mutually exclusive with password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.srvConnectionFormat">SrvConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | srv_connection_format block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.sslConfig">SslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a></code> | ssl_config block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.standardConnectionFormat">StandardConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | standard_connection_format block. |

---

##### `HostAddresses`<sup>Required</sup> <a name="HostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.hostAddresses"></a>

```go
HostAddresses interface{}
```

- *Type:* interface{}

host_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#host_addresses DatastreamConnectionProfile#host_addresses}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the MongoDB connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `AdditionalOptions`<sup>Optional</sup> <a name="AdditionalOptions" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.additionalOptions"></a>

```go
AdditionalOptions *map[string]*string
```

- *Type:* *map[string]*string

A map of additional options for the MongoDB connection.

Keys are case-sensitive and should match the official
MongoDB connection string options: https://www.mongodb.com/docs/manual/reference/connection-string-options/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#additional_options DatastreamConnectionProfile#additional_options}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for the MongoDB connection. Mutually exclusive with secretManagerStoredPassword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `ReplicaSet`<sup>Optional</sup> <a name="ReplicaSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.replicaSet"></a>

```go
ReplicaSet *string
```

- *Type:* *string

Name of the replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#replica_set DatastreamConnectionProfile#replica_set}

---

##### `SecretManagerStoredPassword`<sup>Optional</sup> <a name="SecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.secretManagerStoredPassword"></a>

```go
SecretManagerStoredPassword *string
```

- *Type:* *string

A reference to a Secret Manager resource name storing the MongoDB connection password. Mutually exclusive with password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

##### `SrvConnectionFormat`<sup>Optional</sup> <a name="SrvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.srvConnectionFormat"></a>

```go
SrvConnectionFormat DatastreamConnectionProfileMongodbProfileSrvConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

srv_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#srv_connection_format DatastreamConnectionProfile#srv_connection_format}

---

##### `SslConfig`<sup>Optional</sup> <a name="SslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.sslConfig"></a>

```go
SslConfig DatastreamConnectionProfileMongodbProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

##### `StandardConnectionFormat`<sup>Optional</sup> <a name="StandardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.standardConnectionFormat"></a>

```go
StandardConnectionFormat DatastreamConnectionProfileMongodbProfileStandardConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

standard_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#standard_connection_format DatastreamConnectionProfile#standard_connection_format}

---

### DatastreamConnectionProfileMongodbProfileHostAddresses <a name="DatastreamConnectionProfileMongodbProfileHostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileMongodbProfileHostAddresses {
	Hostname: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname for the connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.port">Port</a></code> | <code>*f64</code> | Port for the connection. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

### DatastreamConnectionProfileMongodbProfileSrvConnectionFormat <a name="DatastreamConnectionProfileMongodbProfileSrvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat {

}
```


### DatastreamConnectionProfileMongodbProfileSslConfig <a name="DatastreamConnectionProfileMongodbProfileSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileMongodbProfileSslConfig {
	CaCertificate: *string,
	ClientCertificate: *string,
	ClientKey: *string,
	SecretManagerStoredClientKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientKey">ClientKey</a></code> | <code>*string</code> | PEM-encoded private key associated with the Client Certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.secretManagerStoredClientKey">SecretManagerStoredClientKey</a></code> | <code>*string</code> | A reference to a Secret Manager resource name storing the PEM-encoded private key. Mutually exclusive with clientKey. |

---

##### `CaCertificate`<sup>Optional</sup> <a name="CaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.caCertificate"></a>

```go
CaCertificate *string
```

- *Type:* *string

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

##### `SecretManagerStoredClientKey`<sup>Optional</sup> <a name="SecretManagerStoredClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.secretManagerStoredClientKey"></a>

```go
SecretManagerStoredClientKey *string
```

- *Type:* *string

A reference to a Secret Manager resource name storing the PEM-encoded private key. Mutually exclusive with clientKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#secret_manager_stored_client_key DatastreamConnectionProfile#secret_manager_stored_client_key}

---

### DatastreamConnectionProfileMongodbProfileStandardConnectionFormat <a name="DatastreamConnectionProfileMongodbProfileStandardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat {
	DirectConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat.property.directConnection">DirectConnection</a></code> | <code>interface{}</code> | Specifies whether the client connects directly to the host[:port] in the connection URI. |

---

##### `DirectConnection`<sup>Optional</sup> <a name="DirectConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat.property.directConnection"></a>

```go
DirectConnection interface{}
```

- *Type:* interface{}

Specifies whether the client connects directly to the host[:port] in the connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#direct_connection DatastreamConnectionProfile#direct_connection}

---

### DatastreamConnectionProfileMysqlProfile <a name="DatastreamConnectionProfileMysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileMysqlProfile {
	Hostname: *string,
	Username: *string,
	Password: *string,
	Port: *f64,
	SecretManagerStoredPassword: *string,
	SslConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username">Username</a></code> | <code>*string</code> | Username for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password">Password</a></code> | <code>*string</code> | Password for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port">Port</a></code> | <code>*f64</code> | Port for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.secretManagerStoredPassword">SecretManagerStoredPassword</a></code> | <code>*string</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig">SslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `SecretManagerStoredPassword`<sup>Optional</sup> <a name="SecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.secretManagerStoredPassword"></a>

```go
SecretManagerStoredPassword *string
```

- *Type:* *string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

##### `SslConfig`<sup>Optional</sup> <a name="SslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig"></a>

```go
SslConfig DatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

### DatastreamConnectionProfileMysqlProfileSslConfig <a name="DatastreamConnectionProfileMysqlProfileSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileMysqlProfileSslConfig {
	CaCertificate: *string,
	ClientCertificate: *string,
	ClientKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey">ClientKey</a></code> | <code>*string</code> | PEM-encoded private key associated with the Client Certificate. |

---

##### `CaCertificate`<sup>Optional</sup> <a name="CaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate"></a>

```go
CaCertificate *string
```

- *Type:* *string

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

### DatastreamConnectionProfileOracleProfile <a name="DatastreamConnectionProfileOracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileOracleProfile {
	DatabaseService: *string,
	Hostname: *string,
	Username: *string,
	ConnectionAttributes: *map[string]*string,
	Password: *string,
	Port: *f64,
	SecretManagerStoredPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService">DatabaseService</a></code> | <code>*string</code> | Database for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username">Username</a></code> | <code>*string</code> | Username for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes">ConnectionAttributes</a></code> | <code>*map[string]*string</code> | Connection string attributes. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password">Password</a></code> | <code>*string</code> | Password for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port">Port</a></code> | <code>*f64</code> | Port for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.secretManagerStoredPassword">SecretManagerStoredPassword</a></code> | <code>*string</code> | A reference to a Secret Manager resource name storing the user's password. |

---

##### `DatabaseService`<sup>Required</sup> <a name="DatabaseService" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService"></a>

```go
DatabaseService *string
```

- *Type:* *string

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#database_service DatastreamConnectionProfile#database_service}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `ConnectionAttributes`<sup>Optional</sup> <a name="ConnectionAttributes" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes"></a>

```go
ConnectionAttributes *map[string]*string
```

- *Type:* *map[string]*string

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#connection_attributes DatastreamConnectionProfile#connection_attributes}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `SecretManagerStoredPassword`<sup>Optional</sup> <a name="SecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.secretManagerStoredPassword"></a>

```go
SecretManagerStoredPassword *string
```

- *Type:* *string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

### DatastreamConnectionProfilePostgresqlProfile <a name="DatastreamConnectionProfilePostgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfilePostgresqlProfile {
	Database: *string,
	Hostname: *string,
	Username: *string,
	Password: *string,
	Port: *f64,
	SecretManagerStoredPassword: *string,
	SslConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database">Database</a></code> | <code>*string</code> | Database for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username">Username</a></code> | <code>*string</code> | Username for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password">Password</a></code> | <code>*string</code> | Password for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port">Port</a></code> | <code>*f64</code> | Port for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.secretManagerStoredPassword">SecretManagerStoredPassword</a></code> | <code>*string</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.sslConfig">SslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database"></a>

```go
Database *string
```

- *Type:* *string

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#database DatastreamConnectionProfile#database}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `SecretManagerStoredPassword`<sup>Optional</sup> <a name="SecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.secretManagerStoredPassword"></a>

```go
SecretManagerStoredPassword *string
```

- *Type:* *string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

##### `SslConfig`<sup>Optional</sup> <a name="SslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.sslConfig"></a>

```go
SslConfig DatastreamConnectionProfilePostgresqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

### DatastreamConnectionProfilePostgresqlProfileSslConfig <a name="DatastreamConnectionProfilePostgresqlProfileSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfilePostgresqlProfileSslConfig {
	ServerAndClientVerification: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification,
	ServerVerification: github.com/cdktn-io/cdktn-provider-google-go/google/v20.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverAndClientVerification">ServerAndClientVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | server_and_client_verification block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverVerification">ServerVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | server_verification block. |

---

##### `ServerAndClientVerification`<sup>Optional</sup> <a name="ServerAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverAndClientVerification"></a>

```go
ServerAndClientVerification DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

server_and_client_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#server_and_client_verification DatastreamConnectionProfile#server_and_client_verification}

---

##### `ServerVerification`<sup>Optional</sup> <a name="ServerVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverVerification"></a>

```go
ServerVerification DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

server_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#server_verification DatastreamConnectionProfile#server_verification}

---

### DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification {
	CaCertificate: *string,
	ClientCertificate: *string,
	ClientKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | PEM-encoded server root CA certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link to this certificate to the trusted root certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientKey">ClientKey</a></code> | <code>*string</code> | PEM-encoded private key associated with the client certificate. |

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.caCertificate"></a>

```go
CaCertificate *string
```

- *Type:* *string

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link to this certificate to the trusted root certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

PEM-encoded private key associated with the client certificate.

This value will be used during the SSL/TLS handshake, allowing
the PostgreSQL server to authenticate the client's identity,
i.e. identity of the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

### DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification {
	CaCertificate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | PEM-encoded server root CA certificate. |

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.property.caCertificate"></a>

```go
CaCertificate *string
```

- *Type:* *string

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

### DatastreamConnectionProfilePrivateConnectivity <a name="DatastreamConnectionProfilePrivateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfilePrivateConnectivity {
	PrivateConnection: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection">PrivateConnection</a></code> | <code>*string</code> | A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'. |

---

##### `PrivateConnection`<sup>Required</sup> <a name="PrivateConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection"></a>

```go
PrivateConnection *string
```

- *Type:* *string

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#private_connection DatastreamConnectionProfile#private_connection}

---

### DatastreamConnectionProfileSqlServerProfile <a name="DatastreamConnectionProfileSqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileSqlServerProfile {
	Database: *string,
	Hostname: *string,
	Username: *string,
	Password: *string,
	Port: *f64,
	SecretManagerStoredPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.database">Database</a></code> | <code>*string</code> | Database for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.username">Username</a></code> | <code>*string</code> | Username for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.password">Password</a></code> | <code>*string</code> | Password for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.port">Port</a></code> | <code>*f64</code> | Port for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.secretManagerStoredPassword">SecretManagerStoredPassword</a></code> | <code>*string</code> | A reference to a Secret Manager resource name storing the user's password. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.database"></a>

```go
Database *string
```

- *Type:* *string

Database for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#database DatastreamConnectionProfile#database}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `SecretManagerStoredPassword`<sup>Optional</sup> <a name="SecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.secretManagerStoredPassword"></a>

```go
SecretManagerStoredPassword *string
```

- *Type:* *string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

### DatastreamConnectionProfileTimeouts <a name="DatastreamConnectionProfileTimeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatastreamConnectionProfileBigqueryProfileOutputReference <a name="DatastreamConnectionProfileBigqueryProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileBigqueryProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileBigqueryProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---


### DatastreamConnectionProfileForwardSshConnectivityOutputReference <a name="DatastreamConnectionProfileForwardSshConnectivityOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileForwardSshConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileForwardSshConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---


### DatastreamConnectionProfileGcsProfileOutputReference <a name="DatastreamConnectionProfileGcsProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileGcsProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileGcsProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath">ResetRootPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRootPath` <a name="ResetRootPath" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath"></a>

```go
func ResetRootPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput">RootPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath">RootPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `RootPathInput`<sup>Optional</sup> <a name="RootPathInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput"></a>

```go
func RootPathInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `RootPath`<sup>Required</sup> <a name="RootPath" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath"></a>

```go
func RootPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---


### DatastreamConnectionProfileMongodbProfileHostAddressesList <a name="DatastreamConnectionProfileMongodbProfileHostAddressesList" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileMongodbProfileHostAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatastreamConnectionProfileMongodbProfileHostAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.get"></a>

```go
func Get(index *f64) DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference <a name="DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatastreamConnectionProfileMongodbProfileOutputReference <a name="DatastreamConnectionProfileMongodbProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileMongodbProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileMongodbProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses">PutHostAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat">PutSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig">PutSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat">PutStandardConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetAdditionalOptions">ResetAdditionalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetReplicaSet">ResetReplicaSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSecretManagerStoredPassword">ResetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSrvConnectionFormat">ResetSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSslConfig">ResetSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetStandardConnectionFormat">ResetStandardConnectionFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostAddresses` <a name="PutHostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses"></a>

```go
func PutHostAddresses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSrvConnectionFormat` <a name="PutSrvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat"></a>

```go
func PutSrvConnectionFormat(value DatastreamConnectionProfileMongodbProfileSrvConnectionFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---

##### `PutSslConfig` <a name="PutSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig"></a>

```go
func PutSslConfig(value DatastreamConnectionProfileMongodbProfileSslConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

---

##### `PutStandardConnectionFormat` <a name="PutStandardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat"></a>

```go
func PutStandardConnectionFormat(value DatastreamConnectionProfileMongodbProfileStandardConnectionFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---

##### `ResetAdditionalOptions` <a name="ResetAdditionalOptions" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetAdditionalOptions"></a>

```go
func ResetAdditionalOptions()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetReplicaSet` <a name="ResetReplicaSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetReplicaSet"></a>

```go
func ResetReplicaSet()
```

##### `ResetSecretManagerStoredPassword` <a name="ResetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSecretManagerStoredPassword"></a>

```go
func ResetSecretManagerStoredPassword()
```

##### `ResetSrvConnectionFormat` <a name="ResetSrvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSrvConnectionFormat"></a>

```go
func ResetSrvConnectionFormat()
```

##### `ResetSslConfig` <a name="ResetSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSslConfig"></a>

```go
func ResetSslConfig()
```

##### `ResetStandardConnectionFormat` <a name="ResetStandardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetStandardConnectionFormat"></a>

```go
func ResetStandardConnectionFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddresses">HostAddresses</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList">DatastreamConnectionProfileMongodbProfileHostAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormat">SrvConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfig">SslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference">DatastreamConnectionProfileMongodbProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormat">StandardConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.additionalOptionsInput">AdditionalOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddressesInput">HostAddressesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSetInput">ReplicaSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPasswordInput">SecretManagerStoredPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormatInput">SrvConnectionFormatInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfigInput">SslConfigInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormatInput">StandardConnectionFormatInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.additionalOptions">AdditionalOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSet">ReplicaSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPassword">SecretManagerStoredPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostAddresses`<sup>Required</sup> <a name="HostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddresses"></a>

```go
func HostAddresses() DatastreamConnectionProfileMongodbProfileHostAddressesList
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList">DatastreamConnectionProfileMongodbProfileHostAddressesList</a>

---

##### `SrvConnectionFormat`<sup>Required</sup> <a name="SrvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormat"></a>

```go
func SrvConnectionFormat() DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference</a>

---

##### `SslConfig`<sup>Required</sup> <a name="SslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfig"></a>

```go
func SslConfig() DatastreamConnectionProfileMongodbProfileSslConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference">DatastreamConnectionProfileMongodbProfileSslConfigOutputReference</a>

---

##### `StandardConnectionFormat`<sup>Required</sup> <a name="StandardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormat"></a>

```go
func StandardConnectionFormat() DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference</a>

---

##### `AdditionalOptionsInput`<sup>Optional</sup> <a name="AdditionalOptionsInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.additionalOptionsInput"></a>

```go
func AdditionalOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostAddressesInput`<sup>Optional</sup> <a name="HostAddressesInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddressesInput"></a>

```go
func HostAddressesInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ReplicaSetInput`<sup>Optional</sup> <a name="ReplicaSetInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSetInput"></a>

```go
func ReplicaSetInput() *string
```

- *Type:* *string

---

##### `SecretManagerStoredPasswordInput`<sup>Optional</sup> <a name="SecretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```go
func SecretManagerStoredPasswordInput() *string
```

- *Type:* *string

---

##### `SrvConnectionFormatInput`<sup>Optional</sup> <a name="SrvConnectionFormatInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormatInput"></a>

```go
func SrvConnectionFormatInput() DatastreamConnectionProfileMongodbProfileSrvConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---

##### `SslConfigInput`<sup>Optional</sup> <a name="SslConfigInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfigInput"></a>

```go
func SslConfigInput() DatastreamConnectionProfileMongodbProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

---

##### `StandardConnectionFormatInput`<sup>Optional</sup> <a name="StandardConnectionFormatInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormatInput"></a>

```go
func StandardConnectionFormatInput() DatastreamConnectionProfileMongodbProfileStandardConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `AdditionalOptions`<sup>Required</sup> <a name="AdditionalOptions" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.additionalOptions"></a>

```go
func AdditionalOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ReplicaSet`<sup>Required</sup> <a name="ReplicaSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSet"></a>

```go
func ReplicaSet() *string
```

- *Type:* *string

---

##### `SecretManagerStoredPassword`<sup>Required</sup> <a name="SecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPassword"></a>

```go
func SecretManagerStoredPassword() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileMongodbProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

---


### DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference <a name="DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileMongodbProfileSrvConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---


### DatastreamConnectionProfileMongodbProfileSslConfigOutputReference <a name="DatastreamConnectionProfileMongodbProfileSslConfigOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileMongodbProfileSslConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileMongodbProfileSslConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetCaCertificate">ResetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetSecretManagerStoredClientKey">ResetSecretManagerStoredClientKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCertificate` <a name="ResetCaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetCaCertificate"></a>

```go
func ResetCaCertificate()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientKey"></a>

```go
func ResetClientKey()
```

##### `ResetSecretManagerStoredClientKey` <a name="ResetSecretManagerStoredClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetSecretManagerStoredClientKey"></a>

```go
func ResetSecretManagerStoredClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateSet">CaCertificateSet</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateSet">ClientCertificateSet</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeySet">ClientKeySet</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKeyInput">SecretManagerStoredClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKey">SecretManagerStoredClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertificateSet`<sup>Required</sup> <a name="CaCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateSet"></a>

```go
func CaCertificateSet() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ClientCertificateSet`<sup>Required</sup> <a name="ClientCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```go
func ClientCertificateSet() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ClientKeySet`<sup>Required</sup> <a name="ClientKeySet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeySet"></a>

```go
func ClientKeySet() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateInput"></a>

```go
func CaCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `SecretManagerStoredClientKeyInput`<sup>Optional</sup> <a name="SecretManagerStoredClientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKeyInput"></a>

```go
func SecretManagerStoredClientKeyInput() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `SecretManagerStoredClientKey`<sup>Required</sup> <a name="SecretManagerStoredClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKey"></a>

```go
func SecretManagerStoredClientKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileMongodbProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

---


### DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference <a name="DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resetDirectConnection">ResetDirectConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectConnection` <a name="ResetDirectConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resetDirectConnection"></a>

```go
func ResetDirectConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnectionInput">DirectConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnection">DirectConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectConnectionInput`<sup>Optional</sup> <a name="DirectConnectionInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnectionInput"></a>

```go
func DirectConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `DirectConnection`<sup>Required</sup> <a name="DirectConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnection"></a>

```go
func DirectConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileMongodbProfileStandardConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---


### DatastreamConnectionProfileMysqlProfileOutputReference <a name="DatastreamConnectionProfileMysqlProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileMysqlProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileMysqlProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig">PutSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSecretManagerStoredPassword">ResetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig">ResetSslConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSslConfig` <a name="PutSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig"></a>

```go
func PutSslConfig(value DatastreamConnectionProfileMysqlProfileSslConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSecretManagerStoredPassword` <a name="ResetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSecretManagerStoredPassword"></a>

```go
func ResetSecretManagerStoredPassword()
```

##### `ResetSslConfig` <a name="ResetSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig"></a>

```go
func ResetSslConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig">SslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPasswordInput">SecretManagerStoredPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput">SslConfigInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPassword">SecretManagerStoredPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SslConfig`<sup>Required</sup> <a name="SslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig"></a>

```go
func SslConfig() DatastreamConnectionProfileMysqlProfileSslConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SecretManagerStoredPasswordInput`<sup>Optional</sup> <a name="SecretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```go
func SecretManagerStoredPasswordInput() *string
```

- *Type:* *string

---

##### `SslConfigInput`<sup>Optional</sup> <a name="SslConfigInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput"></a>

```go
func SslConfigInput() DatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecretManagerStoredPassword`<sup>Required</sup> <a name="SecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPassword"></a>

```go
func SecretManagerStoredPassword() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---


### DatastreamConnectionProfileMysqlProfileSslConfigOutputReference <a name="DatastreamConnectionProfileMysqlProfileSslConfigOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileMysqlProfileSslConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileMysqlProfileSslConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate">ResetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCertificate` <a name="ResetCaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate"></a>

```go
func ResetCaCertificate()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey"></a>

```go
func ResetClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet">CaCertificateSet</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet">ClientCertificateSet</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet">ClientKeySet</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertificateSet`<sup>Required</sup> <a name="CaCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet"></a>

```go
func CaCertificateSet() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ClientCertificateSet`<sup>Required</sup> <a name="ClientCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```go
func ClientCertificateSet() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ClientKeySet`<sup>Required</sup> <a name="ClientKeySet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet"></a>

```go
func ClientKeySet() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput"></a>

```go
func CaCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---


### DatastreamConnectionProfileOracleProfileOutputReference <a name="DatastreamConnectionProfileOracleProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileOracleProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileOracleProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes">ResetConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetSecretManagerStoredPassword">ResetSecretManagerStoredPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionAttributes` <a name="ResetConnectionAttributes" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes"></a>

```go
func ResetConnectionAttributes()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSecretManagerStoredPassword` <a name="ResetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetSecretManagerStoredPassword"></a>

```go
func ResetSecretManagerStoredPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput">ConnectionAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput">DatabaseServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPasswordInput">SecretManagerStoredPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes">ConnectionAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService">DatabaseService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPassword">SecretManagerStoredPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionAttributesInput`<sup>Optional</sup> <a name="ConnectionAttributesInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput"></a>

```go
func ConnectionAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatabaseServiceInput`<sup>Optional</sup> <a name="DatabaseServiceInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput"></a>

```go
func DatabaseServiceInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SecretManagerStoredPasswordInput`<sup>Optional</sup> <a name="SecretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```go
func SecretManagerStoredPasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ConnectionAttributes`<sup>Required</sup> <a name="ConnectionAttributes" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes"></a>

```go
func ConnectionAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatabaseService`<sup>Required</sup> <a name="DatabaseService" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService"></a>

```go
func DatabaseService() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecretManagerStoredPassword`<sup>Required</sup> <a name="SecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPassword"></a>

```go
func SecretManagerStoredPassword() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---


### DatastreamConnectionProfilePostgresqlProfileOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfilePostgresqlProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfilePostgresqlProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig">PutSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSecretManagerStoredPassword">ResetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSslConfig">ResetSslConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSslConfig` <a name="PutSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig"></a>

```go
func PutSslConfig(value DatastreamConnectionProfilePostgresqlProfileSslConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSecretManagerStoredPassword` <a name="ResetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSecretManagerStoredPassword"></a>

```go
func ResetSecretManagerStoredPassword()
```

##### `ResetSslConfig` <a name="ResetSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSslConfig"></a>

```go
func ResetSslConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfig">SslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPasswordInput">SecretManagerStoredPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfigInput">SslConfigInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPassword">SecretManagerStoredPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SslConfig`<sup>Required</sup> <a name="SslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfig"></a>

```go
func SslConfig() DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SecretManagerStoredPasswordInput`<sup>Optional</sup> <a name="SecretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```go
func SecretManagerStoredPasswordInput() *string
```

- *Type:* *string

---

##### `SslConfigInput`<sup>Optional</sup> <a name="SslConfigInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfigInput"></a>

```go
func SslConfigInput() DatastreamConnectionProfilePostgresqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecretManagerStoredPassword`<sup>Required</sup> <a name="SecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPassword"></a>

```go
func SecretManagerStoredPassword() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---


### DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification">PutServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification">PutServerVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerAndClientVerification">ResetServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerVerification">ResetServerVerification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServerAndClientVerification` <a name="PutServerAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification"></a>

```go
func PutServerAndClientVerification(value DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---

##### `PutServerVerification` <a name="PutServerVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification"></a>

```go
func PutServerVerification(value DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---

##### `ResetServerAndClientVerification` <a name="ResetServerAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerAndClientVerification"></a>

```go
func ResetServerAndClientVerification()
```

##### `ResetServerVerification` <a name="ResetServerVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerVerification"></a>

```go
func ResetServerVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerification">ServerAndClientVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerification">ServerVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerificationInput">ServerAndClientVerificationInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerificationInput">ServerVerificationInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerAndClientVerification`<sup>Required</sup> <a name="ServerAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerification"></a>

```go
func ServerAndClientVerification() DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference</a>

---

##### `ServerVerification`<sup>Required</sup> <a name="ServerVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerification"></a>

```go
func ServerVerification() DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference</a>

---

##### `ServerAndClientVerificationInput`<sup>Optional</sup> <a name="ServerAndClientVerificationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerificationInput"></a>

```go
func ServerAndClientVerificationInput() DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---

##### `ServerVerificationInput`<sup>Optional</sup> <a name="ServerVerificationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerificationInput"></a>

```go
func ServerVerificationInput() DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfilePostgresqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---


### DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificateInput"></a>

```go
func CaCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---


### DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificateInput"></a>

```go
func CaCertificateInput() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---


### DatastreamConnectionProfilePrivateConnectivityOutputReference <a name="DatastreamConnectionProfilePrivateConnectivityOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfilePrivateConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfilePrivateConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput">PrivateConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection">PrivateConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateConnectionInput`<sup>Optional</sup> <a name="PrivateConnectionInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```go
func PrivateConnectionInput() *string
```

- *Type:* *string

---

##### `PrivateConnection`<sup>Required</sup> <a name="PrivateConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection"></a>

```go
func PrivateConnection() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---


### DatastreamConnectionProfileSqlServerProfileOutputReference <a name="DatastreamConnectionProfileSqlServerProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileSqlServerProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileSqlServerProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetSecretManagerStoredPassword">ResetSecretManagerStoredPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSecretManagerStoredPassword` <a name="ResetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetSecretManagerStoredPassword"></a>

```go
func ResetSecretManagerStoredPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPasswordInput">SecretManagerStoredPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPassword">SecretManagerStoredPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SecretManagerStoredPasswordInput`<sup>Optional</sup> <a name="SecretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```go
func SecretManagerStoredPasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecretManagerStoredPassword`<sup>Required</sup> <a name="SecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPassword"></a>

```go
func SecretManagerStoredPassword() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileSqlServerProfile
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

---


### DatastreamConnectionProfileTimeoutsOutputReference <a name="DatastreamConnectionProfileTimeoutsOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



