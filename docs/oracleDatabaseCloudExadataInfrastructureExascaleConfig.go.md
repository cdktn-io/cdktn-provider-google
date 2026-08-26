# `oracleDatabaseCloudExadataInfrastructureExascaleConfig` Submodule <a name="`oracleDatabaseCloudExadataInfrastructureExascaleConfig` Submodule" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseCloudExadataInfrastructureExascaleConfig <a name="OracleDatabaseCloudExadataInfrastructureExascaleConfig" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config google_oracle_database_cloud_exadata_infrastructure_exascale_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/oracledatabasecloudexadatainfrastructureexascaleconfig"

oracledatabasecloudexadatainfrastructureexascaleconfig.NewOracleDatabaseCloudExadataInfrastructureExascaleConfig(scope Construct, id *string, config OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig) OracleDatabaseCloudExadataInfrastructureExascaleConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig">OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig">OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts"></a>

```go
func PutTimeouts(value OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseCloudExadataInfrastructureExascaleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/oracledatabasecloudexadatainfrastructureexascaleconfig"

oracledatabasecloudexadatainfrastructureexascaleconfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/oracledatabasecloudexadatainfrastructureexascaleconfig"

oracledatabasecloudexadatainfrastructureexascaleconfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/oracledatabasecloudexadatainfrastructureexascaleconfig"

oracledatabasecloudexadatainfrastructureexascaleconfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/oracledatabasecloudexadatainfrastructureexascaleconfig"

oracledatabasecloudexadatainfrastructureexascaleconfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OracleDatabaseCloudExadataInfrastructureExascaleConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OracleDatabaseCloudExadataInfrastructureExascaleConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OracleDatabaseCloudExadataInfrastructureExascaleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseCloudExadataInfrastructureExascaleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructureInput">CloudExadataInfrastructureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGbInput">TotalStorageSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructure">CloudExadataInfrastructure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGb">TotalStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeouts"></a>

```go
func Timeouts() OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference</a>

---

##### `CloudExadataInfrastructureInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructureInput"></a>

```go
func CloudExadataInfrastructureInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TotalStorageSizeGbInput`<sup>Optional</sup> <a name="TotalStorageSizeGbInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGbInput"></a>

```go
func TotalStorageSizeGbInput() *f64
```

- *Type:* *f64

---

##### `CloudExadataInfrastructure`<sup>Required</sup> <a name="CloudExadataInfrastructure" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructure"></a>

```go
func CloudExadataInfrastructure() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TotalStorageSizeGb`<sup>Required</sup> <a name="TotalStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGb"></a>

```go
func TotalStorageSizeGb() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig <a name="OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/oracledatabasecloudexadatainfrastructureexascaleconfig"

&oracledatabasecloudexadatainfrastructureexascaleconfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CloudExadataInfrastructure: *string,
	Location: *string,
	TotalStorageSizeGb: *f64,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.cloudExadataInfrastructure">CloudExadataInfrastructure</a></code> | <code>*string</code> | A reference to CloudExadataInfrastructure resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#location OracleDatabaseCloudExadataInfrastructureExascaleConfig#location}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.totalStorageSizeGb">TotalStorageSizeGb</a></code> | <code>*f64</code> | The total storage to be allocated to Exascale in GBs. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#id OracleDatabaseCloudExadataInfrastructureExascaleConfig#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#project OracleDatabaseCloudExadataInfrastructureExascaleConfig#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudExadataInfrastructure`<sup>Required</sup> <a name="CloudExadataInfrastructure" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.cloudExadataInfrastructure"></a>

```go
CloudExadataInfrastructure *string
```

- *Type:* *string

A reference to CloudExadataInfrastructure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#cloud_exadata_infrastructure OracleDatabaseCloudExadataInfrastructureExascaleConfig#cloud_exadata_infrastructure}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#location OracleDatabaseCloudExadataInfrastructureExascaleConfig#location}.

---

##### `TotalStorageSizeGb`<sup>Required</sup> <a name="TotalStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.totalStorageSizeGb"></a>

```go
TotalStorageSizeGb *f64
```

- *Type:* *f64

The total storage to be allocated to Exascale in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#total_storage_size_gb OracleDatabaseCloudExadataInfrastructureExascaleConfig#total_storage_size_gb}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#deletion_policy OracleDatabaseCloudExadataInfrastructureExascaleConfig#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#id OracleDatabaseCloudExadataInfrastructureExascaleConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#project OracleDatabaseCloudExadataInfrastructureExascaleConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.timeouts"></a>

```go
Timeouts OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#timeouts OracleDatabaseCloudExadataInfrastructureExascaleConfig#timeouts}

---

### OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts <a name="OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/oracledatabasecloudexadatainfrastructureexascaleconfig"

&oracledatabasecloudexadatainfrastructureexascaleconfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#create OracleDatabaseCloudExadataInfrastructureExascaleConfig#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#delete OracleDatabaseCloudExadataInfrastructureExascaleConfig#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#create OracleDatabaseCloudExadataInfrastructureExascaleConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#delete OracleDatabaseCloudExadataInfrastructureExascaleConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference <a name="OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/oracledatabasecloudexadatainfrastructureexascaleconfig"

oracledatabasecloudexadatainfrastructureexascaleconfig.NewOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



