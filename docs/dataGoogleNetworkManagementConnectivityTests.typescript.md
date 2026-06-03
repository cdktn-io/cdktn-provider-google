# `dataGoogleNetworkManagementConnectivityTests` Submodule <a name="`dataGoogleNetworkManagementConnectivityTests` Submodule" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkManagementConnectivityTests <a name="DataGoogleNetworkManagementConnectivityTests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests google_network_management_connectivity_tests}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests(scope: Construct, id: string, config?: DataGoogleNetworkManagementConnectivityTestsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig">DataGoogleNetworkManagementConnectivityTestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig">DataGoogleNetworkManagementConnectivityTestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkManagementConnectivityTests resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleNetworkManagementConnectivityTests resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleNetworkManagementConnectivityTests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleNetworkManagementConnectivityTests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkManagementConnectivityTests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.connectivityTests">connectivityTests</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `connectivityTests`<sup>Required</sup> <a name="connectivityTests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.connectivityTests"></a>

```typescript
public readonly connectivityTests: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkManagementConnectivityTestsConfig <a name="DataGoogleNetworkManagementConnectivityTestsConfig" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

const dataGoogleNetworkManagementConnectivityTestsConfig: dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.filter">filter</a></code> | <code>string</code> | Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#filter DataGoogleNetworkManagementConnectivityTests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}.

---

### DataGoogleNetworkManagementConnectivityTestsConnectivityTests <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

const dataGoogleNetworkManagementConnectivityTestsConnectivityTests: dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests = { ... }
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

const dataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination: dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination = { ... }
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

const dataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource: dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource = { ... }
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

const dataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion: dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion = { ... }
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

const dataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction: dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction = { ... }
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

const dataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision: dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get"></a>

```typescript
public get(index: number): DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkeMasterCluster">gkeMasterCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkePod">gkePod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisCluster">redisCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisInstance">redisInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: string;
```

- *Type:* string

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `gkeMasterCluster`<sup>Required</sup> <a name="gkeMasterCluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkeMasterCluster"></a>

```typescript
public readonly gkeMasterCluster: string;
```

- *Type:* string

---

##### `gkePod`<sup>Required</sup> <a name="gkePod" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkePod"></a>

```typescript
public readonly gkePod: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `redisCluster`<sup>Required</sup> <a name="redisCluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisCluster"></a>

```typescript
public readonly redisCluster: string;
```

- *Type:* string

---

##### `redisInstance`<sup>Required</sup> <a name="redisInstance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisInstance"></a>

```typescript
public readonly redisInstance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get"></a>

```typescript
public get(index: number): DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.bypassFirewallChecks">bypassFirewallChecks</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.relatedProjects">relatedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.roundTrip">roundTrip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests">DataGoogleNetworkManagementConnectivityTestsConnectivityTests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassFirewallChecks`<sup>Required</sup> <a name="bypassFirewallChecks" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.bypassFirewallChecks"></a>

```typescript
public readonly bypassFirewallChecks: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.destination"></a>

```typescript
public readonly destination: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `relatedProjects`<sup>Required</sup> <a name="relatedProjects" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.relatedProjects"></a>

```typescript
public readonly relatedProjects: string[];
```

- *Type:* string[]

---

##### `roundTrip`<sup>Required</sup> <a name="roundTrip" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.roundTrip"></a>

```typescript
public readonly roundTrip: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.source"></a>

```typescript
public readonly source: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleNetworkManagementConnectivityTestsConnectivityTests;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests">DataGoogleNetworkManagementConnectivityTestsConnectivityTests</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get"></a>

```typescript
public get(index: number): DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get"></a>

```typescript
public get(index: number): DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get"></a>

```typescript
public get(index: number): DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get"></a>

```typescript
public get(index: number): DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTests } from '@cdktn/provider-google'

new dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.appEngineVersion">appEngineVersion</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudFunction">cloudFunction</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudRunRevision">cloudRunRevision</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.gkeMasterCluster">gkeMasterCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appEngineVersion`<sup>Required</sup> <a name="appEngineVersion" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.appEngineVersion"></a>

```typescript
public readonly appEngineVersion: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList</a>

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudFunction"></a>

```typescript
public readonly cloudFunction: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList</a>

---

##### `cloudRunRevision`<sup>Required</sup> <a name="cloudRunRevision" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudRunRevision"></a>

```typescript
public readonly cloudRunRevision: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList</a>

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: string;
```

- *Type:* string

---

##### `gkeMasterCluster`<sup>Required</sup> <a name="gkeMasterCluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.gkeMasterCluster"></a>

```typescript
public readonly gkeMasterCluster: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource</a>

---



