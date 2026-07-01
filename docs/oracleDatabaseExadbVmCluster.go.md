# `oracleDatabaseExadbVmCluster` Submodule <a name="`oracleDatabaseExadbVmCluster` Submodule" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseExadbVmCluster <a name="OracleDatabaseExadbVmCluster" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster google_oracle_database_exadb_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

oracledatabaseexadbvmcluster.NewOracleDatabaseExadbVmCluster(scope Construct, id *string, config OracleDatabaseExadbVmClusterConfig) OracleDatabaseExadbVmCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig">OracleDatabaseExadbVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig">OracleDatabaseExadbVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOdbNetwork">ResetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties"></a>

```go
func PutProperties(value OracleDatabaseExadbVmClusterProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts"></a>

```go
func PutTimeouts(value OracleDatabaseExadbVmClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetOdbNetwork` <a name="ResetOdbNetwork" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOdbNetwork"></a>

```go
func ResetOdbNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

oracledatabaseexadbvmcluster.OracleDatabaseExadbVmCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

oracledatabaseexadbvmcluster.OracleDatabaseExadbVmCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

oracledatabaseexadbvmcluster.OracleDatabaseExadbVmCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

oracledatabaseexadbvmcluster.OracleDatabaseExadbVmCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OracleDatabaseExadbVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OracleDatabaseExadbVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseExadbVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference">OracleDatabaseExadbVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference">OracleDatabaseExadbVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnetInput">BackupOdbSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput">ExadbVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetworkInput">OdbNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnetInput">OdbSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnet">BackupOdbSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterId">ExadbVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetwork">OdbNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnet">OdbSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.gcpOracleZone"></a>

```go
func GcpOracleZone() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.properties"></a>

```go
func Properties() OracleDatabaseExadbVmClusterPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference">OracleDatabaseExadbVmClusterPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeouts"></a>

```go
func Timeouts() OracleDatabaseExadbVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference">OracleDatabaseExadbVmClusterTimeoutsOutputReference</a>

---

##### `BackupOdbSubnetInput`<sup>Optional</sup> <a name="BackupOdbSubnetInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnetInput"></a>

```go
func BackupOdbSubnetInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExadbVmClusterIdInput`<sup>Optional</sup> <a name="ExadbVmClusterIdInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput"></a>

```go
func ExadbVmClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OdbNetworkInput`<sup>Optional</sup> <a name="OdbNetworkInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetworkInput"></a>

```go
func OdbNetworkInput() *string
```

- *Type:* *string

---

##### `OdbSubnetInput`<sup>Optional</sup> <a name="OdbSubnetInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnetInput"></a>

```go
func OdbSubnetInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.propertiesInput"></a>

```go
func PropertiesInput() OracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupOdbSubnet`<sup>Required</sup> <a name="BackupOdbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnet"></a>

```go
func BackupOdbSubnet() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExadbVmClusterId`<sup>Required</sup> <a name="ExadbVmClusterId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterId"></a>

```go
func ExadbVmClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OdbNetwork`<sup>Required</sup> <a name="OdbNetwork" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetwork"></a>

```go
func OdbNetwork() *string
```

- *Type:* *string

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnet"></a>

```go
func OdbSubnet() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseExadbVmClusterConfig <a name="OracleDatabaseExadbVmClusterConfig" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

&oracledatabaseexadbvmcluster.OracleDatabaseExadbVmClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BackupOdbSubnet: *string,
	DisplayName: *string,
	ExadbVmClusterId: *string,
	Location: *string,
	OdbSubnet: *string,
	Properties: github.com/cdktn-io/cdktn-provider-google-go/google/v19.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties,
	DeletionPolicy: *string,
	DeletionProtection: interface{},
	Id: *string,
	Labels: *map[string]*string,
	OdbNetwork: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet">BackupOdbSubnet</a></code> | <code>*string</code> | The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId">ExadbVmClusterId</a></code> | <code>*string</code> | The ID of the ExadbVmCluster to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbSubnet">OdbSubnet</a></code> | <code>*string</code> | The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels or tags associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbNetwork">OdbNetwork</a></code> | <code>*string</code> | The name of the OdbNetwork associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupOdbSubnet`<sup>Required</sup> <a name="BackupOdbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet"></a>

```go
BackupOdbSubnet *string
```

- *Type:* *string

The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#backup_odb_subnet OracleDatabaseExadbVmCluster#backup_odb_subnet}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the ExadbVmCluster.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#display_name OracleDatabaseExadbVmCluster#display_name}

---

##### `ExadbVmClusterId`<sup>Required</sup> <a name="ExadbVmClusterId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId"></a>

```go
ExadbVmClusterId *string
```

- *Type:* *string

The ID of the ExadbVmCluster to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#exadb_vm_cluster_id OracleDatabaseExadbVmCluster#exadb_vm_cluster_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#location OracleDatabaseExadbVmCluster#location}

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbSubnet"></a>

```go
OdbSubnet *string
```

- *Type:* *string

The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#odb_subnet OracleDatabaseExadbVmCluster#odb_subnet}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.properties"></a>

```go
Properties OracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#properties OracleDatabaseExadbVmCluster#properties}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#deletion_policy OracleDatabaseExadbVmCluster#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#deletion_protection OracleDatabaseExadbVmCluster#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels or tags associated with the ExadbVmCluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#labels OracleDatabaseExadbVmCluster#labels}

---

##### `OdbNetwork`<sup>Optional</sup> <a name="OdbNetwork" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbNetwork"></a>

```go
OdbNetwork *string
```

- *Type:* *string

The name of the OdbNetwork associated with the ExadbVmCluster.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#odb_network OracleDatabaseExadbVmCluster#odb_network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.timeouts"></a>

```go
Timeouts OracleDatabaseExadbVmClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#timeouts OracleDatabaseExadbVmCluster#timeouts}

---

### OracleDatabaseExadbVmClusterProperties <a name="OracleDatabaseExadbVmClusterProperties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

&oracledatabaseexadbvmcluster.OracleDatabaseExadbVmClusterProperties {
	EnabledEcpuCountPerNode: *f64,
	ExascaleDbStorageVault: *string,
	GridImageId: *string,
	HostnamePrefix: *string,
	NodeCount: *f64,
	ShapeAttribute: *string,
	SshPublicKeys: *[]*string,
	VmFileSystemStorage: github.com/cdktn-io/cdktn-provider-google-go/google/v19.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage,
	AdditionalEcpuCountPerNode: *f64,
	ClusterName: *string,
	DataCollectionOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v19.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions,
	LicenseModel: *string,
	ScanListenerPortTcp: *f64,
	TimeZone: github.com/cdktn-io/cdktn-provider-google-go/google/v19.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode">EnabledEcpuCountPerNode</a></code> | <code>*f64</code> | The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault">ExascaleDbStorageVault</a></code> | <code>*string</code> | The name of ExascaleDbStorageVault associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.gridImageId">GridImageId</a></code> | <code>*string</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | The number of nodes/VMs in the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.shapeAttribute">ShapeAttribute</a></code> | <code>*string</code> | The shape attribute of the VM cluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | The SSH public keys for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage">VmFileSystemStorage</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | vm_file_system_storage block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode">AdditionalEcpuCountPerNode</a></code> | <code>*f64</code> | The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.clusterName">ClusterName</a></code> | <code>*string</code> | The cluster name for Exascale vm cluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | SCAN listener port - TCP. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `EnabledEcpuCountPerNode`<sup>Required</sup> <a name="EnabledEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode"></a>

```go
EnabledEcpuCountPerNode *f64
```

- *Type:* *f64

The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#enabled_ecpu_count_per_node OracleDatabaseExadbVmCluster#enabled_ecpu_count_per_node}

---

##### `ExascaleDbStorageVault`<sup>Required</sup> <a name="ExascaleDbStorageVault" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault"></a>

```go
ExascaleDbStorageVault *string
```

- *Type:* *string

The name of ExascaleDbStorageVault associated with the ExadbVmCluster.

It can refer to an existing ExascaleDbStorageVault. Or a new one can be
created during the ExadbVmCluster creation (requires
storage_vault_properties to be set).
Format:
projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#exascale_db_storage_vault OracleDatabaseExadbVmCluster#exascale_db_storage_vault}

---

##### `GridImageId`<sup>Required</sup> <a name="GridImageId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.gridImageId"></a>

```go
GridImageId *string
```

- *Type:* *string

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#grid_image_id OracleDatabaseExadbVmCluster#grid_image_id}

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.hostnamePrefix"></a>

```go
HostnamePrefix *string
```

- *Type:* *string

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#hostname_prefix OracleDatabaseExadbVmCluster#hostname_prefix}

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

The number of nodes/VMs in the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#node_count OracleDatabaseExadbVmCluster#node_count}

---

##### `ShapeAttribute`<sup>Required</sup> <a name="ShapeAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.shapeAttribute"></a>

```go
ShapeAttribute *string
```

- *Type:* *string

The shape attribute of the VM cluster.

The type of Exascale storage used
for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle
Database 23ai and later
Possible values:
SMART_STORAGE
BLOCK_STORAGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#shape_attribute OracleDatabaseExadbVmCluster#shape_attribute}

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

The SSH public keys for the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#ssh_public_keys OracleDatabaseExadbVmCluster#ssh_public_keys}

---

##### `VmFileSystemStorage`<sup>Required</sup> <a name="VmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage"></a>

```go
VmFileSystemStorage OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

vm_file_system_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#vm_file_system_storage OracleDatabaseExadbVmCluster#vm_file_system_storage}

---

##### `AdditionalEcpuCountPerNode`<sup>Optional</sup> <a name="AdditionalEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode"></a>

```go
AdditionalEcpuCountPerNode *f64
```

- *Type:* *f64

The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#additional_ecpu_count_per_node OracleDatabaseExadbVmCluster#additional_ecpu_count_per_node}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

The cluster name for Exascale vm cluster.

The cluster name must begin with
an alphabetic character and may contain hyphens(-) but can not contain
underscores(_). It should be not more than 11 characters and is not case
sensitive.
OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#cluster_name OracleDatabaseExadbVmCluster#cluster_name}

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions"></a>

```go
DataCollectionOptions OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#data_collection_options OracleDatabaseExadbVmCluster#data_collection_options}

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#license_model OracleDatabaseExadbVmCluster#license_model}

---

##### `ScanListenerPortTcp`<sup>Optional</sup> <a name="ScanListenerPortTcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp"></a>

```go
ScanListenerPortTcp *f64
```

- *Type:* *f64

SCAN listener port - TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#scan_listener_port_tcp OracleDatabaseExadbVmCluster#scan_listener_port_tcp}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.timeZone"></a>

```go
TimeZone OracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#time_zone OracleDatabaseExadbVmCluster#time_zone}

---

### OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions <a name="OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

&oracledatabaseexadbvmcluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions {
	IsDiagnosticsEventsEnabled: interface{},
	IsHealthMonitoringEnabled: interface{},
	IsIncidentLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | Indicates whether to enable health monitoring. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```go
IsDiagnosticsEventsEnabled interface{}
```

- *Type:* interface{}

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#is_diagnostics_events_enabled OracleDatabaseExadbVmCluster#is_diagnostics_events_enabled}

---

##### `IsHealthMonitoringEnabled`<sup>Optional</sup> <a name="IsHealthMonitoringEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```go
IsHealthMonitoringEnabled interface{}
```

- *Type:* interface{}

Indicates whether to enable health monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#is_health_monitoring_enabled OracleDatabaseExadbVmCluster#is_health_monitoring_enabled}

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```go
IsIncidentLogsEnabled interface{}
```

- *Type:* interface{}

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#is_incident_logs_enabled OracleDatabaseExadbVmCluster#is_incident_logs_enabled}

---

### OracleDatabaseExadbVmClusterPropertiesTimeZone <a name="OracleDatabaseExadbVmClusterPropertiesTimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

&oracledatabaseexadbvmcluster.OracleDatabaseExadbVmClusterPropertiesTimeZone {
	Id: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.id">Id</a></code> | <code>*string</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.version">Version</a></code> | <code>*string</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.id"></a>

```go
Id *string
```

- *Type:* *string

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.version"></a>

```go
Version *string
```

- *Type:* *string

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#version OracleDatabaseExadbVmCluster#version}

---

### OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage <a name="OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

&oracledatabaseexadbvmcluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage {
	SizeInGbsPerNode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode">SizeInGbsPerNode</a></code> | <code>*f64</code> | The storage allocation for the exadbvmcluster per node, in gigabytes (GB). |

---

##### `SizeInGbsPerNode`<sup>Required</sup> <a name="SizeInGbsPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode"></a>

```go
SizeInGbsPerNode *f64
```

- *Type:* *f64

The storage allocation for the exadbvmcluster per node, in gigabytes (GB).

This field is used to calculate the total storage allocation for the
exadbvmcluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#size_in_gbs_per_node OracleDatabaseExadbVmCluster#size_in_gbs_per_node}

---

### OracleDatabaseExadbVmClusterTimeouts <a name="OracleDatabaseExadbVmClusterTimeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

&oracledatabaseexadbvmcluster.OracleDatabaseExadbVmClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#create OracleDatabaseExadbVmCluster#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#delete OracleDatabaseExadbVmCluster#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#update OracleDatabaseExadbVmCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#create OracleDatabaseExadbVmCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#delete OracleDatabaseExadbVmCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exadb_vm_cluster#update OracleDatabaseExadbVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

oracledatabaseexadbvmcluster.NewOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">ResetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```go
func ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsHealthMonitoringEnabled` <a name="ResetIsHealthMonitoringEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```go
func ResetIsHealthMonitoringEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```go
func ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">IsHealthMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```go
func IsDiagnosticsEventsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="IsHealthMonitoringEnabledInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```go
func IsHealthMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```go
func IsIncidentLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```go
func IsDiagnosticsEventsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```go
func IsHealthMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```go
func IsIncidentLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---


### OracleDatabaseExadbVmClusterPropertiesOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

oracledatabaseexadbvmcluster.NewOracleDatabaseExadbVmClusterPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseExadbVmClusterPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage">PutVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode">ResetAdditionalEcpuCountPerNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp">ResetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions"></a>

```go
func PutDataCollectionOptions(value OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone"></a>

```go
func PutTimeZone(value OracleDatabaseExadbVmClusterPropertiesTimeZone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `PutVmFileSystemStorage` <a name="PutVmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage"></a>

```go
func PutVmFileSystemStorage(value OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `ResetAdditionalEcpuCountPerNode` <a name="ResetAdditionalEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode"></a>

```go
func ResetAdditionalEcpuCountPerNode()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions"></a>

```go
func ResetDataCollectionOptions()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetScanListenerPortTcp` <a name="ResetScanListenerPortTcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp"></a>

```go
func ResetScanListenerPortTcp()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion">GiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri">OciUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage">VmFileSystemStorage</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput">AdditionalEcpuCountPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput">EnabledEcpuCountPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput">ExascaleDbStorageVaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput">GridImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput">HostnamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput">ScanListenerPortTcpInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput">ShapeAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput">VmFileSystemStorageInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode">AdditionalEcpuCountPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode">EnabledEcpuCountPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault">ExascaleDbStorageVault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId">GridImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute">ShapeAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions"></a>

```go
func DataCollectionOptions() OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a>

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion"></a>

```go
func GiVersion() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```go
func MemorySizeGb() *f64
```

- *Type:* *f64

---

##### `OciUri`<sup>Required</sup> <a name="OciUri" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri"></a>

```go
func OciUri() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone"></a>

```go
func TimeZone() OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `VmFileSystemStorage`<sup>Required</sup> <a name="VmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage"></a>

```go
func VmFileSystemStorage() OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a>

---

##### `AdditionalEcpuCountPerNodeInput`<sup>Optional</sup> <a name="AdditionalEcpuCountPerNodeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput"></a>

```go
func AdditionalEcpuCountPerNodeInput() *f64
```

- *Type:* *f64

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```go
func DataCollectionOptionsInput() OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `EnabledEcpuCountPerNodeInput`<sup>Optional</sup> <a name="EnabledEcpuCountPerNodeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput"></a>

```go
func EnabledEcpuCountPerNodeInput() *f64
```

- *Type:* *f64

---

##### `ExascaleDbStorageVaultInput`<sup>Optional</sup> <a name="ExascaleDbStorageVaultInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput"></a>

```go
func ExascaleDbStorageVaultInput() *string
```

- *Type:* *string

---

##### `GridImageIdInput`<sup>Optional</sup> <a name="GridImageIdInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput"></a>

```go
func GridImageIdInput() *string
```

- *Type:* *string

---

##### `HostnamePrefixInput`<sup>Optional</sup> <a name="HostnamePrefixInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```go
func HostnamePrefixInput() *string
```

- *Type:* *string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcpInput`<sup>Optional</sup> <a name="ScanListenerPortTcpInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput"></a>

```go
func ScanListenerPortTcpInput() *f64
```

- *Type:* *f64

---

##### `ShapeAttributeInput`<sup>Optional</sup> <a name="ShapeAttributeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput"></a>

```go
func ShapeAttributeInput() *string
```

- *Type:* *string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() OracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `VmFileSystemStorageInput`<sup>Optional</sup> <a name="VmFileSystemStorageInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput"></a>

```go
func VmFileSystemStorageInput() OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `AdditionalEcpuCountPerNode`<sup>Required</sup> <a name="AdditionalEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode"></a>

```go
func AdditionalEcpuCountPerNode() *f64
```

- *Type:* *f64

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `EnabledEcpuCountPerNode`<sup>Required</sup> <a name="EnabledEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode"></a>

```go
func EnabledEcpuCountPerNode() *f64
```

- *Type:* *f64

---

##### `ExascaleDbStorageVault`<sup>Required</sup> <a name="ExascaleDbStorageVault" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault"></a>

```go
func ExascaleDbStorageVault() *string
```

- *Type:* *string

---

##### `GridImageId`<sup>Required</sup> <a name="GridImageId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId"></a>

```go
func GridImageId() *string
```

- *Type:* *string

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```go
func HostnamePrefix() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `ShapeAttribute`<sup>Required</sup> <a name="ShapeAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute"></a>

```go
func ShapeAttribute() *string
```

- *Type:* *string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() OracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

---


### OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

oracledatabaseexadbvmcluster.NewOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```go
func InternalValue() OracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---


### OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

oracledatabaseexadbvmcluster.NewOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput">SizeInGbsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode">SizeInGbsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeInGbsPerNodeInput`<sup>Optional</sup> <a name="SizeInGbsPerNodeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput"></a>

```go
func SizeInGbsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `SizeInGbsPerNode`<sup>Required</sup> <a name="SizeInGbsPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode"></a>

```go
func SizeInGbsPerNode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---


### OracleDatabaseExadbVmClusterTimeoutsOutputReference <a name="OracleDatabaseExadbVmClusterTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/oracledatabaseexadbvmcluster"

oracledatabaseexadbvmcluster.NewOracleDatabaseExadbVmClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseExadbVmClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



