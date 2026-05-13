# `storageInsightsReportConfig` Submodule <a name="`storageInsightsReportConfig` Submodule" id="@cdktn/provider-google.storageInsightsReportConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageInsightsReportConfig <a name="StorageInsightsReportConfig" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config google_storage_insights_report_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.NewStorageInsightsReportConfig(scope Construct, id *string, config StorageInsightsReportConfigConfig) StorageInsightsReportConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig">StorageInsightsReportConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig">StorageInsightsReportConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putCsvOptions">PutCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putFrequencyOptions">PutFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putObjectMetadataReportOptions">PutObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putParquetOptions">PutParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetCsvOptions">ResetCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetFrequencyOptions">ResetFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetObjectMetadataReportOptions">ResetObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetParquetOptions">ResetParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCsvOptions` <a name="PutCsvOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putCsvOptions"></a>

```go
func PutCsvOptions(value StorageInsightsReportConfigCsvOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

---

##### `PutFrequencyOptions` <a name="PutFrequencyOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putFrequencyOptions"></a>

```go
func PutFrequencyOptions(value StorageInsightsReportConfigFrequencyOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putFrequencyOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

---

##### `PutObjectMetadataReportOptions` <a name="PutObjectMetadataReportOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putObjectMetadataReportOptions"></a>

```go
func PutObjectMetadataReportOptions(value StorageInsightsReportConfigObjectMetadataReportOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putObjectMetadataReportOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

---

##### `PutParquetOptions` <a name="PutParquetOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putParquetOptions"></a>

```go
func PutParquetOptions(value StorageInsightsReportConfigParquetOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putParquetOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptions">StorageInsightsReportConfigParquetOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putTimeouts"></a>

```go
func PutTimeouts(value StorageInsightsReportConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a>

---

##### `ResetCsvOptions` <a name="ResetCsvOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetCsvOptions"></a>

```go
func ResetCsvOptions()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetFrequencyOptions` <a name="ResetFrequencyOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetFrequencyOptions"></a>

```go
func ResetFrequencyOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetObjectMetadataReportOptions` <a name="ResetObjectMetadataReportOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetObjectMetadataReportOptions"></a>

```go
func ResetObjectMetadataReportOptions()
```

##### `ResetParquetOptions` <a name="ResetParquetOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetParquetOptions"></a>

```go
func ResetParquetOptions()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageInsightsReportConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.StorageInsightsReportConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.StorageInsightsReportConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.StorageInsightsReportConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.StorageInsightsReportConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StorageInsightsReportConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageInsightsReportConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageInsightsReportConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StorageInsightsReportConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference">StorageInsightsReportConfigCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptions">FrequencyOptions</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference">StorageInsightsReportConfigFrequencyOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptions">ObjectMetadataReportOptions</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference">StorageInsightsReportConfigParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference">StorageInsightsReportConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptionsInput">CsvOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptionsInput">FrequencyOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptionsInput">ObjectMetadataReportOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.parquetOptionsInput">ParquetOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptions">StorageInsightsReportConfigParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptions"></a>

```go
func CsvOptions() StorageInsightsReportConfigCsvOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference">StorageInsightsReportConfigCsvOptionsOutputReference</a>

---

##### `FrequencyOptions`<sup>Required</sup> <a name="FrequencyOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptions"></a>

```go
func FrequencyOptions() StorageInsightsReportConfigFrequencyOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference">StorageInsightsReportConfigFrequencyOptionsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectMetadataReportOptions`<sup>Required</sup> <a name="ObjectMetadataReportOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptions"></a>

```go
func ObjectMetadataReportOptions() StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference</a>

---

##### `ParquetOptions`<sup>Required</sup> <a name="ParquetOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.parquetOptions"></a>

```go
func ParquetOptions() StorageInsightsReportConfigParquetOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference">StorageInsightsReportConfigParquetOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeouts"></a>

```go
func Timeouts() StorageInsightsReportConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference">StorageInsightsReportConfigTimeoutsOutputReference</a>

---

##### `CsvOptionsInput`<sup>Optional</sup> <a name="CsvOptionsInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptionsInput"></a>

```go
func CsvOptionsInput() StorageInsightsReportConfigCsvOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `FrequencyOptionsInput`<sup>Optional</sup> <a name="FrequencyOptionsInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptionsInput"></a>

```go
func FrequencyOptionsInput() StorageInsightsReportConfigFrequencyOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ObjectMetadataReportOptionsInput`<sup>Optional</sup> <a name="ObjectMetadataReportOptionsInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptionsInput"></a>

```go
func ObjectMetadataReportOptionsInput() StorageInsightsReportConfigObjectMetadataReportOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

---

##### `ParquetOptionsInput`<sup>Optional</sup> <a name="ParquetOptionsInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.parquetOptionsInput"></a>

```go
func ParquetOptionsInput() StorageInsightsReportConfigParquetOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptions">StorageInsightsReportConfigParquetOptions</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageInsightsReportConfigConfig <a name="StorageInsightsReportConfigConfig" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

&storageinsightsreportconfig.StorageInsightsReportConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	CsvOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions,
	DisplayName: *string,
	ForceDestroy: interface{},
	FrequencyOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions,
	Id: *string,
	ObjectMetadataReportOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions,
	ParquetOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptions,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of the ReportConfig. The source and destination buckets specified in the ReportConfig must be in the same location. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | If set, all the inventory report details associated with this report configuration are deleted. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.frequencyOptions">FrequencyOptions</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a></code> | frequency_options block. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#id StorageInsightsReportConfig#id}. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.objectMetadataReportOptions">ObjectMetadataReportOptions</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a></code> | object_metadata_report_options block. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptions">StorageInsightsReportConfigParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#project StorageInsightsReportConfig#project}. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the ReportConfig. The source and destination buckets specified in the ReportConfig must be in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#location StorageInsightsReportConfig#location}

---

##### `CsvOptions`<sup>Optional</sup> <a name="CsvOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.csvOptions"></a>

```go
CsvOptions StorageInsightsReportConfigCsvOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#csv_options StorageInsightsReportConfig#csv_options}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#display_name StorageInsightsReportConfig#display_name}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

If set, all the inventory report details associated with this report configuration are deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#force_destroy StorageInsightsReportConfig#force_destroy}

---

##### `FrequencyOptions`<sup>Optional</sup> <a name="FrequencyOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.frequencyOptions"></a>

```go
FrequencyOptions StorageInsightsReportConfigFrequencyOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

frequency_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#frequency_options StorageInsightsReportConfig#frequency_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#id StorageInsightsReportConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObjectMetadataReportOptions`<sup>Optional</sup> <a name="ObjectMetadataReportOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.objectMetadataReportOptions"></a>

```go
ObjectMetadataReportOptions StorageInsightsReportConfigObjectMetadataReportOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

object_metadata_report_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#object_metadata_report_options StorageInsightsReportConfig#object_metadata_report_options}

---

##### `ParquetOptions`<sup>Optional</sup> <a name="ParquetOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.parquetOptions"></a>

```go
ParquetOptions StorageInsightsReportConfigParquetOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptions">StorageInsightsReportConfigParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#parquet_options StorageInsightsReportConfig#parquet_options}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#project StorageInsightsReportConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.timeouts"></a>

```go
Timeouts StorageInsightsReportConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#timeouts StorageInsightsReportConfig#timeouts}

---

### StorageInsightsReportConfigCsvOptions <a name="StorageInsightsReportConfigCsvOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

&storageinsightsreportconfig.StorageInsightsReportConfigCsvOptions {
	Delimiter: *string,
	HeaderRequired: interface{},
	RecordSeparator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.delimiter">Delimiter</a></code> | <code>*string</code> | The delimiter used to separate the fields in the inventory report CSV file. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.headerRequired">HeaderRequired</a></code> | <code>interface{}</code> | The boolean that indicates whether or not headers are included in the inventory report CSV file. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.recordSeparator">RecordSeparator</a></code> | <code>*string</code> | The character used to separate the records in the inventory report CSV file. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

The delimiter used to separate the fields in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#delimiter StorageInsightsReportConfig#delimiter}

---

##### `HeaderRequired`<sup>Optional</sup> <a name="HeaderRequired" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.headerRequired"></a>

```go
HeaderRequired interface{}
```

- *Type:* interface{}

The boolean that indicates whether or not headers are included in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#header_required StorageInsightsReportConfig#header_required}

---

##### `RecordSeparator`<sup>Optional</sup> <a name="RecordSeparator" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.recordSeparator"></a>

```go
RecordSeparator *string
```

- *Type:* *string

The character used to separate the records in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#record_separator StorageInsightsReportConfig#record_separator}

---

### StorageInsightsReportConfigFrequencyOptions <a name="StorageInsightsReportConfigFrequencyOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

&storageinsightsreportconfig.StorageInsightsReportConfigFrequencyOptions {
	EndDate: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate,
	Frequency: *string,
	StartDate: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.frequency">Frequency</a></code> | <code>*string</code> | The frequency in which inventory reports are generated. Values are DAILY or WEEKLY. Possible values: ["DAILY", "WEEKLY"]. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | start_date block. |

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.endDate"></a>

```go
EndDate StorageInsightsReportConfigFrequencyOptionsEndDate
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#end_date StorageInsightsReportConfig#end_date}

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

The frequency in which inventory reports are generated. Values are DAILY or WEEKLY. Possible values: ["DAILY", "WEEKLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#frequency StorageInsightsReportConfig#frequency}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.startDate"></a>

```go
StartDate StorageInsightsReportConfigFrequencyOptionsStartDate
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#start_date StorageInsightsReportConfig#start_date}

---

### StorageInsightsReportConfigFrequencyOptionsEndDate <a name="StorageInsightsReportConfigFrequencyOptionsEndDate" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

&storageinsightsreportconfig.StorageInsightsReportConfigFrequencyOptionsEndDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.day">Day</a></code> | <code>*f64</code> | The day of the month to stop generating inventory reports. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.month">Month</a></code> | <code>*f64</code> | The month to stop generating inventory reports. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.year">Year</a></code> | <code>*f64</code> | The year to stop generating inventory reports. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

The day of the month to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#day StorageInsightsReportConfig#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

The month to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#month StorageInsightsReportConfig#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

The year to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#year StorageInsightsReportConfig#year}

---

### StorageInsightsReportConfigFrequencyOptionsStartDate <a name="StorageInsightsReportConfigFrequencyOptionsStartDate" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

&storageinsightsreportconfig.StorageInsightsReportConfigFrequencyOptionsStartDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.day">Day</a></code> | <code>*f64</code> | The day of the month to start generating inventory reports. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.month">Month</a></code> | <code>*f64</code> | The month to start generating inventory reports. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.year">Year</a></code> | <code>*f64</code> | The year to start generating inventory reports. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

The day of the month to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#day StorageInsightsReportConfig#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

The month to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#month StorageInsightsReportConfig#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

The year to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#year StorageInsightsReportConfig#year}

---

### StorageInsightsReportConfigObjectMetadataReportOptions <a name="StorageInsightsReportConfigObjectMetadataReportOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

&storageinsightsreportconfig.StorageInsightsReportConfigObjectMetadataReportOptions {
	MetadataFields: *[]*string,
	StorageDestinationOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions,
	StorageFilters: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.metadataFields">MetadataFields</a></code> | <code>*[]*string</code> | The metadata fields included in an inventory report. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageDestinationOptions">StorageDestinationOptions</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | storage_destination_options block. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageFilters">StorageFilters</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | storage_filters block. |

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.metadataFields"></a>

```go
MetadataFields *[]*string
```

- *Type:* *[]*string

The metadata fields included in an inventory report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#metadata_fields StorageInsightsReportConfig#metadata_fields}

---

##### `StorageDestinationOptions`<sup>Required</sup> <a name="StorageDestinationOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageDestinationOptions"></a>

```go
StorageDestinationOptions StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

storage_destination_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#storage_destination_options StorageInsightsReportConfig#storage_destination_options}

---

##### `StorageFilters`<sup>Optional</sup> <a name="StorageFilters" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageFilters"></a>

```go
StorageFilters StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

storage_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#storage_filters StorageInsightsReportConfig#storage_filters}

---

### StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

&storageinsightsreportconfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions {
	Bucket: *string,
	DestinationPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.bucket">Bucket</a></code> | <code>*string</code> | The destination bucket that stores the generated inventory reports. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | The path within the destination bucket to store generated inventory reports. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The destination bucket that stores the generated inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#bucket StorageInsightsReportConfig#bucket}

---

##### `DestinationPath`<sup>Optional</sup> <a name="DestinationPath" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.destinationPath"></a>

```go
DestinationPath *string
```

- *Type:* *string

The path within the destination bucket to store generated inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#destination_path StorageInsightsReportConfig#destination_path}

---

### StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

&storageinsightsreportconfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters {
	Bucket: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.property.bucket">Bucket</a></code> | <code>*string</code> | The filter to use when specifying which bucket to generate inventory reports for. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The filter to use when specifying which bucket to generate inventory reports for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#bucket StorageInsightsReportConfig#bucket}

---

### StorageInsightsReportConfigParquetOptions <a name="StorageInsightsReportConfigParquetOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

&storageinsightsreportconfig.StorageInsightsReportConfigParquetOptions {

}
```


### StorageInsightsReportConfigTimeouts <a name="StorageInsightsReportConfigTimeouts" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

&storageinsightsreportconfig.StorageInsightsReportConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#create StorageInsightsReportConfig#create}. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#delete StorageInsightsReportConfig#delete}. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#update StorageInsightsReportConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#create StorageInsightsReportConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#delete StorageInsightsReportConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_insights_report_config#update StorageInsightsReportConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageInsightsReportConfigCsvOptionsOutputReference <a name="StorageInsightsReportConfigCsvOptionsOutputReference" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.NewStorageInsightsReportConfigCsvOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsReportConfigCsvOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetHeaderRequired">ResetHeaderRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetRecordSeparator">ResetRecordSeparator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetHeaderRequired` <a name="ResetHeaderRequired" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetHeaderRequired"></a>

```go
func ResetHeaderRequired()
```

##### `ResetRecordSeparator` <a name="ResetRecordSeparator" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetRecordSeparator"></a>

```go
func ResetRecordSeparator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequiredInput">HeaderRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparatorInput">RecordSeparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequired">HeaderRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparator">RecordSeparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `HeaderRequiredInput`<sup>Optional</sup> <a name="HeaderRequiredInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequiredInput"></a>

```go
func HeaderRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `RecordSeparatorInput`<sup>Optional</sup> <a name="RecordSeparatorInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparatorInput"></a>

```go
func RecordSeparatorInput() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `HeaderRequired`<sup>Required</sup> <a name="HeaderRequired" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequired"></a>

```go
func HeaderRequired() interface{}
```

- *Type:* interface{}

---

##### `RecordSeparator`<sup>Required</sup> <a name="RecordSeparator" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparator"></a>

```go
func RecordSeparator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsReportConfigCsvOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

---


### StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference <a name="StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.NewStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsReportConfigFrequencyOptionsEndDate
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

---


### StorageInsightsReportConfigFrequencyOptionsOutputReference <a name="StorageInsightsReportConfigFrequencyOptionsOutputReference" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.NewStorageInsightsReportConfigFrequencyOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsReportConfigFrequencyOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate">PutStartDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndDate` <a name="PutEndDate" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate"></a>

```go
func PutEndDate(value StorageInsightsReportConfigFrequencyOptionsEndDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate"></a>

```go
func PutStartDate(value StorageInsightsReportConfigFrequencyOptionsStartDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference">StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference">StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDate"></a>

```go
func EndDate() StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference">StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDate"></a>

```go
func StartDate() StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference">StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDateInput"></a>

```go
func EndDateInput() StorageInsightsReportConfigFrequencyOptionsEndDate
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDateInput"></a>

```go
func StartDateInput() StorageInsightsReportConfigFrequencyOptionsStartDate
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsReportConfigFrequencyOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

---


### StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference <a name="StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.NewStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsReportConfigFrequencyOptionsStartDate
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

---


### StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference <a name="StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.NewStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions">PutStorageDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters">PutStorageFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resetStorageFilters">ResetStorageFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageDestinationOptions` <a name="PutStorageDestinationOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions"></a>

```go
func PutStorageDestinationOptions(value StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---

##### `PutStorageFilters` <a name="PutStorageFilters" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters"></a>

```go
func PutStorageFilters(value StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---

##### `ResetStorageFilters` <a name="ResetStorageFilters" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resetStorageFilters"></a>

```go
func ResetStorageFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptions">StorageDestinationOptions</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFilters">StorageFilters</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFieldsInput">MetadataFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptionsInput">StorageDestinationOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFiltersInput">StorageFiltersInput</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFields">MetadataFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageDestinationOptions`<sup>Required</sup> <a name="StorageDestinationOptions" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptions"></a>

```go
func StorageDestinationOptions() StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference</a>

---

##### `StorageFilters`<sup>Required</sup> <a name="StorageFilters" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFilters"></a>

```go
func StorageFilters() StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference</a>

---

##### `MetadataFieldsInput`<sup>Optional</sup> <a name="MetadataFieldsInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFieldsInput"></a>

```go
func MetadataFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageDestinationOptionsInput`<sup>Optional</sup> <a name="StorageDestinationOptionsInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptionsInput"></a>

```go
func StorageDestinationOptionsInput() StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---

##### `StorageFiltersInput`<sup>Optional</sup> <a name="StorageFiltersInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFiltersInput"></a>

```go
func StorageFiltersInput() StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFields"></a>

```go
func MetadataFields() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsReportConfigObjectMetadataReportOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

---


### StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.NewStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resetDestinationPath">ResetDestinationPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPath` <a name="ResetDestinationPath" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resetDestinationPath"></a>

```go
func ResetDestinationPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPathInput"></a>

```go
func DestinationPathInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPath"></a>

```go
func DestinationPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---


### StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.NewStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resetBucket"></a>

```go
func ResetBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---


### StorageInsightsReportConfigParquetOptionsOutputReference <a name="StorageInsightsReportConfigParquetOptionsOutputReference" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.NewStorageInsightsReportConfigParquetOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsReportConfigParquetOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptions">StorageInsightsReportConfigParquetOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageInsightsReportConfigParquetOptions
```

- *Type:* <a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigParquetOptions">StorageInsightsReportConfigParquetOptions</a>

---


### StorageInsightsReportConfigTimeoutsOutputReference <a name="StorageInsightsReportConfigTimeoutsOutputReference" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storageinsightsreportconfig"

storageinsightsreportconfig.NewStorageInsightsReportConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageInsightsReportConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



