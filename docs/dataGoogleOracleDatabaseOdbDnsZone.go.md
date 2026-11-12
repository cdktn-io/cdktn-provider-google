# `dataGoogleOracleDatabaseOdbDnsZone` Submodule <a name="`dataGoogleOracleDatabaseOdbDnsZone` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseOdbDnsZone <a name="DataGoogleOracleDatabaseOdbDnsZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone google_oracle_database_odb_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datagoogleoracledatabaseodbdnszone"

datagoogleoracledatabaseodbdnszone.NewDataGoogleOracleDatabaseOdbDnsZone(scope Construct, id *string, config DataGoogleOracleDatabaseOdbDnsZoneConfig) DataGoogleOracleDatabaseOdbDnsZone
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig">DataGoogleOracleDatabaseOdbDnsZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig">DataGoogleOracleDatabaseOdbDnsZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datagoogleoracledatabaseodbdnszone"

datagoogleoracledatabaseodbdnszone.DataGoogleOracleDatabaseOdbDnsZone_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datagoogleoracledatabaseodbdnszone"

datagoogleoracledatabaseodbdnszone.DataGoogleOracleDatabaseOdbDnsZone_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datagoogleoracledatabaseodbdnszone"

datagoogleoracledatabaseodbdnszone.DataGoogleOracleDatabaseOdbDnsZone_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datagoogleoracledatabaseodbdnszone"

datagoogleoracledatabaseodbdnszone.DataGoogleOracleDatabaseOdbDnsZone_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleOracleDatabaseOdbDnsZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleOracleDatabaseOdbDnsZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseOdbDnsZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionProtection">DeletionProtection</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.labels">Labels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput">OdbDnsZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput">OdbnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId">OdbDnsZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetwork">Odbnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionProtection"></a>

```go
func DeletionProtection() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OdbDnsZoneIdInput`<sup>Optional</sup> <a name="OdbDnsZoneIdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput"></a>

```go
func OdbDnsZoneIdInput() *string
```

- *Type:* *string

---

##### `OdbnetworkInput`<sup>Optional</sup> <a name="OdbnetworkInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput"></a>

```go
func OdbnetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OdbDnsZoneId`<sup>Required</sup> <a name="OdbDnsZoneId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId"></a>

```go
func OdbDnsZoneId() *string
```

- *Type:* *string

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetwork"></a>

```go
func Odbnetwork() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseOdbDnsZoneConfig <a name="DataGoogleOracleDatabaseOdbDnsZoneConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/datagoogleoracledatabaseodbdnszone"

&datagoogleoracledatabaseodbdnszone.DataGoogleOracleDatabaseOdbDnsZoneConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	OdbDnsZoneId: *string,
	Odbnetwork: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId">OdbDnsZoneId</a></code> | <code>*string</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork">Odbnetwork</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#id DataGoogleOracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#project DataGoogleOracleDatabaseOdbDnsZone#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OdbDnsZoneId`<sup>Required</sup> <a name="OdbDnsZoneId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId"></a>

```go
OdbDnsZoneId *string
```

- *Type:* *string

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#odb_dns_zone_id DataGoogleOracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork"></a>

```go
Odbnetwork *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#odbnetwork DataGoogleOracleDatabaseOdbDnsZone#odbnetwork}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#id DataGoogleOracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#location DataGoogleOracleDatabaseOdbDnsZone#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#project DataGoogleOracleDatabaseOdbDnsZone#project}.

---



