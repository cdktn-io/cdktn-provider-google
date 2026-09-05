# `biglakeIcebergCatalog` Submodule <a name="`biglakeIcebergCatalog` Submodule" id="@cdktn/provider-google.biglakeIcebergCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeIcebergCatalog <a name="BiglakeIcebergCatalog" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog google_biglake_iceberg_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalog(scope Construct, id *string, config BiglakeIcebergCatalogConfig) BiglakeIcebergCatalog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig">BiglakeIcebergCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig">BiglakeIcebergCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putFederatedCatalogOptions">PutFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putRestrictedLocationsConfig">PutRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetCredentialMode">ResetCredentialMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDefaultLocation">ResetDefaultLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetFederatedCatalogOptions">ResetFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetPrimaryLocation">ResetPrimaryLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetRestrictedLocationsConfig">ResetRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFederatedCatalogOptions` <a name="PutFederatedCatalogOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putFederatedCatalogOptions"></a>

```go
func PutFederatedCatalogOptions(value BiglakeIcebergCatalogFederatedCatalogOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putFederatedCatalogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a>

---

##### `PutRestrictedLocationsConfig` <a name="PutRestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putRestrictedLocationsConfig"></a>

```go
func PutRestrictedLocationsConfig(value BiglakeIcebergCatalogRestrictedLocationsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putRestrictedLocationsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts"></a>

```go
func PutTimeouts(value BiglakeIcebergCatalogTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

---

##### `ResetCredentialMode` <a name="ResetCredentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetCredentialMode"></a>

```go
func ResetCredentialMode()
```

##### `ResetDefaultLocation` <a name="ResetDefaultLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDefaultLocation"></a>

```go
func ResetDefaultLocation()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFederatedCatalogOptions` <a name="ResetFederatedCatalogOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetFederatedCatalogOptions"></a>

```go
func ResetFederatedCatalogOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetId"></a>

```go
func ResetId()
```

##### `ResetPrimaryLocation` <a name="ResetPrimaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetPrimaryLocation"></a>

```go
func ResetPrimaryLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRestrictedLocationsConfig` <a name="ResetRestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetRestrictedLocationsConfig"></a>

```go
func ResetRestrictedLocationsConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.BiglakeIcebergCatalog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.BiglakeIcebergCatalog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.BiglakeIcebergCatalog_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.BiglakeIcebergCatalog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BiglakeIcebergCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BiglakeIcebergCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeIcebergCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccount">BiglakeServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccountId">BiglakeServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.federatedCatalogOptions">FederatedCatalogOptions</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.replicas">Replicas</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList">BiglakeIcebergCatalogReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfig">RestrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.storageRegions">StorageRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference">BiglakeIcebergCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogTypeInput">CatalogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialModeInput">CredentialModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocationInput">DefaultLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.federatedCatalogOptionsInput">FederatedCatalogOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocationInput">PrimaryLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfigInput">RestrictedLocationsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogType">CatalogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialMode">CredentialMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocation">DefaultLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocation">PrimaryLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BiglakeServiceAccount`<sup>Required</sup> <a name="BiglakeServiceAccount" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccount"></a>

```go
func BiglakeServiceAccount() *string
```

- *Type:* *string

---

##### `BiglakeServiceAccountId`<sup>Required</sup> <a name="BiglakeServiceAccountId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccountId"></a>

```go
func BiglakeServiceAccountId() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `FederatedCatalogOptions`<sup>Required</sup> <a name="FederatedCatalogOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.federatedCatalogOptions"></a>

```go
func FederatedCatalogOptions() BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference</a>

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.replicas"></a>

```go
func Replicas() BiglakeIcebergCatalogReplicasList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList">BiglakeIcebergCatalogReplicasList</a>

---

##### `RestrictedLocationsConfig`<sup>Required</sup> <a name="RestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfig"></a>

```go
func RestrictedLocationsConfig() BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a>

---

##### `StorageRegions`<sup>Required</sup> <a name="StorageRegions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.storageRegions"></a>

```go
func StorageRegions() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeouts"></a>

```go
func Timeouts() BiglakeIcebergCatalogTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference">BiglakeIcebergCatalogTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CatalogTypeInput`<sup>Optional</sup> <a name="CatalogTypeInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogTypeInput"></a>

```go
func CatalogTypeInput() *string
```

- *Type:* *string

---

##### `CredentialModeInput`<sup>Optional</sup> <a name="CredentialModeInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialModeInput"></a>

```go
func CredentialModeInput() *string
```

- *Type:* *string

---

##### `DefaultLocationInput`<sup>Optional</sup> <a name="DefaultLocationInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocationInput"></a>

```go
func DefaultLocationInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FederatedCatalogOptionsInput`<sup>Optional</sup> <a name="FederatedCatalogOptionsInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.federatedCatalogOptionsInput"></a>

```go
func FederatedCatalogOptionsInput() BiglakeIcebergCatalogFederatedCatalogOptions
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryLocationInput`<sup>Optional</sup> <a name="PrimaryLocationInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocationInput"></a>

```go
func PrimaryLocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RestrictedLocationsConfigInput`<sup>Optional</sup> <a name="RestrictedLocationsConfigInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfigInput"></a>

```go
func RestrictedLocationsConfigInput() BiglakeIcebergCatalogRestrictedLocationsConfig
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogType"></a>

```go
func CatalogType() *string
```

- *Type:* *string

---

##### `CredentialMode`<sup>Required</sup> <a name="CredentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialMode"></a>

```go
func CredentialMode() *string
```

- *Type:* *string

---

##### `DefaultLocation`<sup>Required</sup> <a name="DefaultLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocation"></a>

```go
func DefaultLocation() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrimaryLocation`<sup>Required</sup> <a name="PrimaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocation"></a>

```go
func PrimaryLocation() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeIcebergCatalogConfig <a name="BiglakeIcebergCatalogConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CatalogType: *string,
	Name: *string,
	CredentialMode: *string,
	DefaultLocation: *string,
	DeletionPolicy: *string,
	Description: *string,
	FederatedCatalogOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v20.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions,
	Id: *string,
	PrimaryLocation: *string,
	Project: *string,
	RestrictedLocationsConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.catalogType">CatalogType</a></code> | <code>*string</code> | The catalog type of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.name">Name</a></code> | <code>*string</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.credentialMode">CredentialMode</a></code> | <code>*string</code> | The credential mode used for the catalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.defaultLocation">DefaultLocation</a></code> | <code>*string</code> | The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.description">Description</a></code> | <code>*string</code> | A user-provided description of the catalog. Maximum 1024 UTF-8 characters. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.federatedCatalogOptions">FederatedCatalogOptions</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a></code> | federated_catalog_options block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#id BiglakeIcebergCatalog#id}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.primaryLocation">PrimaryLocation</a></code> | <code>*string</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#project BiglakeIcebergCatalog#project}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.restrictedLocationsConfig">RestrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | restricted_locations_config block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.catalogType"></a>

```go
CatalogType *string
```

- *Type:* *string

The catalog type of the IcebergCatalog.

* 'CATALOG_TYPE_GCS_BUCKET': Google Cloud Storage bucket catalog type.
* 'CATALOG_TYPE_BIGLAKE': BigLake catalog type.
* 'CATALOG_TYPE_FEDERATED': Federated catalog type, for integrating with external Iceberg REST Catalogs such as Databricks Unity Catalog or AWS Glue. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE", "CATALOG_TYPE_FEDERATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#catalog_type BiglakeIcebergCatalog#catalog_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the IcebergCatalog.

For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
exact same value of the GCS bucket's name. For example, for a bucket:
gs://bucket-name, the catalog name will be exactly "bucket-name".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#name BiglakeIcebergCatalog#name}

---

##### `CredentialMode`<sup>Optional</sup> <a name="CredentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.credentialMode"></a>

```go
CredentialMode *string
```

- *Type:* *string

The credential mode used for the catalog.

CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#credential_mode BiglakeIcebergCatalog#credential_mode}

---

##### `DefaultLocation`<sup>Optional</sup> <a name="DefaultLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.defaultLocation"></a>

```go
DefaultLocation *string
```

- *Type:* *string

The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#default_location BiglakeIcebergCatalog#default_location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#deletion_policy BiglakeIcebergCatalog#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A user-provided description of the catalog. Maximum 1024 UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#description BiglakeIcebergCatalog#description}

---

##### `FederatedCatalogOptions`<sup>Optional</sup> <a name="FederatedCatalogOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.federatedCatalogOptions"></a>

```go
FederatedCatalogOptions BiglakeIcebergCatalogFederatedCatalogOptions
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a>

federated_catalog_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#federated_catalog_options BiglakeIcebergCatalog#federated_catalog_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#id BiglakeIcebergCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrimaryLocation`<sup>Optional</sup> <a name="PrimaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.primaryLocation"></a>

```go
PrimaryLocation *string
```

- *Type:* *string

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#primary_location BiglakeIcebergCatalog#primary_location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#project BiglakeIcebergCatalog#project}.

---

##### `RestrictedLocationsConfig`<sup>Optional</sup> <a name="RestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.restrictedLocationsConfig"></a>

```go
RestrictedLocationsConfig BiglakeIcebergCatalogRestrictedLocationsConfig
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

restricted_locations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#restricted_locations_config BiglakeIcebergCatalog#restricted_locations_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.timeouts"></a>

```go
Timeouts BiglakeIcebergCatalogTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#timeouts BiglakeIcebergCatalog#timeouts}

---

### BiglakeIcebergCatalogFederatedCatalogOptions <a name="BiglakeIcebergCatalogFederatedCatalogOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogFederatedCatalogOptions {
	GlueCatalogInfo: github.com/cdktn-io/cdktn-provider-google-go/google/v20.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo,
	RefreshOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v20.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions,
	SecretName: *string,
	ServiceDirectoryName: *string,
	UnityCatalogInfo: github.com/cdktn-io/cdktn-provider-google-go/google/v20.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.glueCatalogInfo">GlueCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | glue_catalog_info block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.refreshOptions">RefreshOptions</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | refresh_options block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.secretName">SecretName</a></code> | <code>*string</code> | The secret resource name in Secret Manager, in the format 'projects/{projectId}/locations/{location}/secrets/{secret_id}'. Used to store credentials for authenticating with the remote catalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.serviceDirectoryName">ServiceDirectoryName</a></code> | <code>*string</code> | The Service Directory service name for private network connectivity through Cross-Cloud Interconnect. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.unityCatalogInfo">UnityCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | unity_catalog_info block. |

---

##### `GlueCatalogInfo`<sup>Optional</sup> <a name="GlueCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.glueCatalogInfo"></a>

```go
GlueCatalogInfo BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

glue_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#glue_catalog_info BiglakeIcebergCatalog#glue_catalog_info}

---

##### `RefreshOptions`<sup>Optional</sup> <a name="RefreshOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.refreshOptions"></a>

```go
RefreshOptions BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

refresh_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#refresh_options BiglakeIcebergCatalog#refresh_options}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

The secret resource name in Secret Manager, in the format 'projects/{projectId}/locations/{location}/secrets/{secret_id}'. Used to store credentials for authenticating with the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#secret_name BiglakeIcebergCatalog#secret_name}

---

##### `ServiceDirectoryName`<sup>Optional</sup> <a name="ServiceDirectoryName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.serviceDirectoryName"></a>

```go
ServiceDirectoryName *string
```

- *Type:* *string

The Service Directory service name for private network connectivity through Cross-Cloud Interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#service_directory_name BiglakeIcebergCatalog#service_directory_name}

---

##### `UnityCatalogInfo`<sup>Optional</sup> <a name="UnityCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.unityCatalogInfo"></a>

```go
UnityCatalogInfo BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

unity_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#unity_catalog_info BiglakeIcebergCatalog#unity_catalog_info}

---

### BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo <a name="BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo {
	AwsRegion: *string,
	AwsRoleArn: *string,
	Warehouse: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | The AWS region where the Glue catalog is located. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRoleArn">AwsRoleArn</a></code> | <code>*string</code> | The ARN of the AWS IAM role to assume for accessing the Glue catalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.warehouse">Warehouse</a></code> | <code>*string</code> | The AWS Glue warehouse identifier (account ID or S3 table bucket). |

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

The AWS region where the Glue catalog is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#aws_region BiglakeIcebergCatalog#aws_region}

---

##### `AwsRoleArn`<sup>Required</sup> <a name="AwsRoleArn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRoleArn"></a>

```go
AwsRoleArn *string
```

- *Type:* *string

The ARN of the AWS IAM role to assume for accessing the Glue catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#aws_role_arn BiglakeIcebergCatalog#aws_role_arn}

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.warehouse"></a>

```go
Warehouse *string
```

- *Type:* *string

The AWS Glue warehouse identifier (account ID or S3 table bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#warehouse BiglakeIcebergCatalog#warehouse}

---

### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions {
	RefreshSchedule: github.com/cdktn-io/cdktn-provider-google-go/google/v20.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule,
	RefreshScope: github.com/cdktn-io/cdktn-provider-google-go/google/v20.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshSchedule">RefreshSchedule</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | refresh_schedule block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshScope">RefreshScope</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | refresh_scope block. |

---

##### `RefreshSchedule`<sup>Optional</sup> <a name="RefreshSchedule" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshSchedule"></a>

```go
RefreshSchedule BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

refresh_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#refresh_schedule BiglakeIcebergCatalog#refresh_schedule}

---

##### `RefreshScope`<sup>Optional</sup> <a name="RefreshScope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshScope"></a>

```go
RefreshScope BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

refresh_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#refresh_scope BiglakeIcebergCatalog#refresh_scope}

---

### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule {
	RefreshInterval: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | The interval between metadata refreshes, expressed as a duration string (e.g., '300s'). The value must be at least 300s or 0s to disable refresh. |

---

##### `RefreshInterval`<sup>Optional</sup> <a name="RefreshInterval" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.property.refreshInterval"></a>

```go
RefreshInterval *string
```

- *Type:* *string

The interval between metadata refreshes, expressed as a duration string (e.g., '300s'). The value must be at least 300s or 0s to disable refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#refresh_interval BiglakeIcebergCatalog#refresh_interval}

---

### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope {
	NamespaceFilters: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.property.namespaceFilters">NamespaceFilters</a></code> | <code>*[]*string</code> | A list of namespace filters to limit which namespaces are synchronized from the remote catalog. |

---

##### `NamespaceFilters`<sup>Optional</sup> <a name="NamespaceFilters" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.property.namespaceFilters"></a>

```go
NamespaceFilters *[]*string
```

- *Type:* *[]*string

A list of namespace filters to limit which namespaces are synchronized from the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#namespace_filters BiglakeIcebergCatalog#namespace_filters}

---

### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus {

}
```


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus {

}
```


### BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo <a name="BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo {
	CatalogName: *string,
	InstanceName: *string,
	ServicePrincipalApplicationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.catalogName">CatalogName</a></code> | <code>*string</code> | The name of the catalog within the Unity Catalog instance. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.instanceName">InstanceName</a></code> | <code>*string</code> | The Databricks workspace instance name. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.servicePrincipalApplicationId">ServicePrincipalApplicationId</a></code> | <code>*string</code> | The application ID of the Databricks service principal for OIDC authentication. |

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

The name of the catalog within the Unity Catalog instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#catalog_name BiglakeIcebergCatalog#catalog_name}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

The Databricks workspace instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#instance_name BiglakeIcebergCatalog#instance_name}

---

##### `ServicePrincipalApplicationId`<sup>Optional</sup> <a name="ServicePrincipalApplicationId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.servicePrincipalApplicationId"></a>

```go
ServicePrincipalApplicationId *string
```

- *Type:* *string

The application ID of the Databricks service principal for OIDC authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#service_principal_application_id BiglakeIcebergCatalog#service_principal_application_id}

---

### BiglakeIcebergCatalogReplicas <a name="BiglakeIcebergCatalogReplicas" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogReplicas {

}
```


### BiglakeIcebergCatalogRestrictedLocationsConfig <a name="BiglakeIcebergCatalogRestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogRestrictedLocationsConfig {
	RestrictedLocations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations">RestrictedLocations</a></code> | <code>*[]*string</code> | A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it. |

---

##### `RestrictedLocations`<sup>Optional</sup> <a name="RestrictedLocations" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations"></a>

```go
RestrictedLocations *[]*string
```

- *Type:* *[]*string

A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#restricted_locations BiglakeIcebergCatalog#restricted_locations}

---

### BiglakeIcebergCatalogTimeouts <a name="BiglakeIcebergCatalogTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

&biglakeicebergcatalog.BiglakeIcebergCatalogTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#create BiglakeIcebergCatalog#create}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#delete BiglakeIcebergCatalog#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#update BiglakeIcebergCatalog#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#create BiglakeIcebergCatalog#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#delete BiglakeIcebergCatalog#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_catalog#update BiglakeIcebergCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArnInput">AwsRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouseInput">WarehouseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArn">AwsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouse">Warehouse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegionInput"></a>

```go
func AwsRegionInput() *string
```

- *Type:* *string

---

##### `AwsRoleArnInput`<sup>Optional</sup> <a name="AwsRoleArnInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArnInput"></a>

```go
func AwsRoleArnInput() *string
```

- *Type:* *string

---

##### `WarehouseInput`<sup>Optional</sup> <a name="WarehouseInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouseInput"></a>

```go
func WarehouseInput() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `AwsRoleArn`<sup>Required</sup> <a name="AwsRoleArn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArn"></a>

```go
func AwsRoleArn() *string
```

- *Type:* *string

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouse"></a>

```go
func Warehouse() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo">PutGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions">PutRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo">PutUnityCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetGlueCatalogInfo">ResetGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetRefreshOptions">ResetRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetServiceDirectoryName">ResetServiceDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetUnityCatalogInfo">ResetUnityCatalogInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGlueCatalogInfo` <a name="PutGlueCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo"></a>

```go
func PutGlueCatalogInfo(value BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---

##### `PutRefreshOptions` <a name="PutRefreshOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions"></a>

```go
func PutRefreshOptions(value BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---

##### `PutUnityCatalogInfo` <a name="PutUnityCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo"></a>

```go
func PutUnityCatalogInfo(value BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---

##### `ResetGlueCatalogInfo` <a name="ResetGlueCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetGlueCatalogInfo"></a>

```go
func ResetGlueCatalogInfo()
```

##### `ResetRefreshOptions` <a name="ResetRefreshOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetRefreshOptions"></a>

```go
func ResetRefreshOptions()
```

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetSecretName"></a>

```go
func ResetSecretName()
```

##### `ResetServiceDirectoryName` <a name="ResetServiceDirectoryName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetServiceDirectoryName"></a>

```go
func ResetServiceDirectoryName()
```

##### `ResetUnityCatalogInfo` <a name="ResetUnityCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetUnityCatalogInfo"></a>

```go
func ResetUnityCatalogInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfo">GlueCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptions">RefreshOptions</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshStatus">RefreshStatus</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfo">UnityCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfoInput">GlueCatalogInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptionsInput">RefreshOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryNameInput">ServiceDirectoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfoInput">UnityCatalogInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryName">ServiceDirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlueCatalogInfo`<sup>Required</sup> <a name="GlueCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfo"></a>

```go
func GlueCatalogInfo() BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference</a>

---

##### `RefreshOptions`<sup>Required</sup> <a name="RefreshOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptions"></a>

```go
func RefreshOptions() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference</a>

---

##### `RefreshStatus`<sup>Required</sup> <a name="RefreshStatus" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshStatus"></a>

```go
func RefreshStatus() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList</a>

---

##### `UnityCatalogInfo`<sup>Required</sup> <a name="UnityCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfo"></a>

```go
func UnityCatalogInfo() BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference</a>

---

##### `GlueCatalogInfoInput`<sup>Optional</sup> <a name="GlueCatalogInfoInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfoInput"></a>

```go
func GlueCatalogInfoInput() BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---

##### `RefreshOptionsInput`<sup>Optional</sup> <a name="RefreshOptionsInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptionsInput"></a>

```go
func RefreshOptionsInput() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `ServiceDirectoryNameInput`<sup>Optional</sup> <a name="ServiceDirectoryNameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryNameInput"></a>

```go
func ServiceDirectoryNameInput() *string
```

- *Type:* *string

---

##### `UnityCatalogInfoInput`<sup>Optional</sup> <a name="UnityCatalogInfoInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfoInput"></a>

```go
func UnityCatalogInfoInput() BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `ServiceDirectoryName`<sup>Required</sup> <a name="ServiceDirectoryName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryName"></a>

```go
func ServiceDirectoryName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeIcebergCatalogFederatedCatalogOptions
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule">PutRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope">PutRefreshScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshSchedule">ResetRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshScope">ResetRefreshScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRefreshSchedule` <a name="PutRefreshSchedule" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule"></a>

```go
func PutRefreshSchedule(value BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---

##### `PutRefreshScope` <a name="PutRefreshScope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope"></a>

```go
func PutRefreshScope(value BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---

##### `ResetRefreshSchedule` <a name="ResetRefreshSchedule" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshSchedule"></a>

```go
func ResetRefreshSchedule()
```

##### `ResetRefreshScope` <a name="ResetRefreshScope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshScope"></a>

```go
func ResetRefreshScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshSchedule">RefreshSchedule</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScope">RefreshScope</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScheduleInput">RefreshScheduleInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScopeInput">RefreshScopeInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RefreshSchedule`<sup>Required</sup> <a name="RefreshSchedule" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshSchedule"></a>

```go
func RefreshSchedule() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference</a>

---

##### `RefreshScope`<sup>Required</sup> <a name="RefreshScope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScope"></a>

```go
func RefreshScope() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference</a>

---

##### `RefreshScheduleInput`<sup>Optional</sup> <a name="RefreshScheduleInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScheduleInput"></a>

```go
func RefreshScheduleInput() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---

##### `RefreshScopeInput`<sup>Optional</sup> <a name="RefreshScopeInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScopeInput"></a>

```go
func RefreshScopeInput() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resetRefreshInterval">ResetRefreshInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRefreshInterval` <a name="ResetRefreshInterval" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resetRefreshInterval"></a>

```go
func ResetRefreshInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshIntervalInput">RefreshIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RefreshIntervalInput`<sup>Optional</sup> <a name="RefreshIntervalInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshIntervalInput"></a>

```go
func RefreshIntervalInput() *string
```

- *Type:* *string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshInterval"></a>

```go
func RefreshInterval() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resetNamespaceFilters">ResetNamespaceFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespaceFilters` <a name="ResetNamespaceFilters" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resetNamespaceFilters"></a>

```go
func ResetNamespaceFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFiltersInput">NamespaceFiltersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFilters">NamespaceFilters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceFiltersInput`<sup>Optional</sup> <a name="NamespaceFiltersInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFiltersInput"></a>

```go
func NamespaceFiltersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceFilters`<sup>Required</sup> <a name="NamespaceFilters" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFilters"></a>

```go
func NamespaceFilters() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get"></a>

```go
func Get(index *f64) BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.status"></a>

```go
func Status() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get"></a>

```go
func Get(index *f64) BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resetServicePrincipalApplicationId">ResetServicePrincipalApplicationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServicePrincipalApplicationId` <a name="ResetServicePrincipalApplicationId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resetServicePrincipalApplicationId"></a>

```go
func ResetServicePrincipalApplicationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationIdInput">ServicePrincipalApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationId">ServicePrincipalApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalApplicationIdInput`<sup>Optional</sup> <a name="ServicePrincipalApplicationIdInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationIdInput"></a>

```go
func ServicePrincipalApplicationIdInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `ServicePrincipalApplicationId`<sup>Required</sup> <a name="ServicePrincipalApplicationId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationId"></a>

```go
func ServicePrincipalApplicationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---


### BiglakeIcebergCatalogReplicasList <a name="BiglakeIcebergCatalogReplicasList" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogReplicasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BiglakeIcebergCatalogReplicasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get"></a>

```go
func Get(index *f64) BiglakeIcebergCatalogReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BiglakeIcebergCatalogReplicasOutputReference <a name="BiglakeIcebergCatalogReplicasOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BiglakeIcebergCatalogReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas">BiglakeIcebergCatalogReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeIcebergCatalogReplicas
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas">BiglakeIcebergCatalogReplicas</a>

---


### BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference <a name="BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations">ResetRestrictedLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRestrictedLocations` <a name="ResetRestrictedLocations" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations"></a>

```go
func ResetRestrictedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput">RestrictedLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations">RestrictedLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RestrictedLocationsInput`<sup>Optional</sup> <a name="RestrictedLocationsInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput"></a>

```go
func RestrictedLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictedLocations`<sup>Required</sup> <a name="RestrictedLocations" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations"></a>

```go
func RestrictedLocations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeIcebergCatalogRestrictedLocationsConfig
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

---


### BiglakeIcebergCatalogTimeoutsOutputReference <a name="BiglakeIcebergCatalogTimeoutsOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/biglakeicebergcatalog"

biglakeicebergcatalog.NewBiglakeIcebergCatalogTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeIcebergCatalogTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



