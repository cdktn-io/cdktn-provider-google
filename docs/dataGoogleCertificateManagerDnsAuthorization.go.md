# `dataGoogleCertificateManagerDnsAuthorization` Submodule <a name="`dataGoogleCertificateManagerDnsAuthorization` Submodule" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCertificateManagerDnsAuthorization <a name="DataGoogleCertificateManagerDnsAuthorization" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/certificate_manager_dns_authorization google_certificate_manager_dns_authorization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecertificatemanagerdnsauthorization"

datagooglecertificatemanagerdnsauthorization.NewDataGoogleCertificateManagerDnsAuthorization(scope Construct, id *string, config DataGoogleCertificateManagerDnsAuthorizationConfig) DataGoogleCertificateManagerDnsAuthorization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig">DataGoogleCertificateManagerDnsAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig">DataGoogleCertificateManagerDnsAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCertificateManagerDnsAuthorization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecertificatemanagerdnsauthorization"

datagooglecertificatemanagerdnsauthorization.DataGoogleCertificateManagerDnsAuthorization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecertificatemanagerdnsauthorization"

datagooglecertificatemanagerdnsauthorization.DataGoogleCertificateManagerDnsAuthorization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecertificatemanagerdnsauthorization"

datagooglecertificatemanagerdnsauthorization.DataGoogleCertificateManagerDnsAuthorization_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecertificatemanagerdnsauthorization"

datagooglecertificatemanagerdnsauthorization.DataGoogleCertificateManagerDnsAuthorization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleCertificateManagerDnsAuthorization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleCertificateManagerDnsAuthorization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleCertificateManagerDnsAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/certificate_manager_dns_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCertificateManagerDnsAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.dnsResourceRecord">DnsResourceRecord</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList">DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.labels">Labels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsResourceRecord`<sup>Required</sup> <a name="DnsResourceRecord" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.dnsResourceRecord"></a>

```go
func DnsResourceRecord() DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList">DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCertificateManagerDnsAuthorizationConfig <a name="DataGoogleCertificateManagerDnsAuthorizationConfig" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecertificatemanagerdnsauthorization"

&datagooglecertificatemanagerdnsauthorization.DataGoogleCertificateManagerDnsAuthorizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Domain: *string,
	Name: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.domain">Domain</a></code> | <code>*string</code> | A domain which is being authorized. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/certificate_manager_dns_authorization#id DataGoogleCertificateManagerDnsAuthorization#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.location">Location</a></code> | <code>*string</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/certificate_manager_dns_authorization#project DataGoogleCertificateManagerDnsAuthorization#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

A domain which is being authorized.

A DnsAuthorization resource covers a
single domain and its wildcard, e.g. authorization for "example.com" can
be used to issue certificates for "example.com" and "*.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/certificate_manager_dns_authorization#domain DataGoogleCertificateManagerDnsAuthorization#domain}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/certificate_manager_dns_authorization#name DataGoogleCertificateManagerDnsAuthorization#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/certificate_manager_dns_authorization#id DataGoogleCertificateManagerDnsAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/certificate_manager_dns_authorization#location DataGoogleCertificateManagerDnsAuthorization#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/certificate_manager_dns_authorization#project DataGoogleCertificateManagerDnsAuthorization#project}.

---

### DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord <a name="DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecertificatemanagerdnsauthorization"

&datagooglecertificatemanagerdnsauthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList <a name="DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecertificatemanagerdnsauthorization"

datagooglecertificatemanagerdnsauthorization.NewDataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.get"></a>

```go
func Get(index *f64) DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference <a name="DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecertificatemanagerdnsauthorization"

datagooglecertificatemanagerdnsauthorization.NewDataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord">DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord">DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord</a>

---



