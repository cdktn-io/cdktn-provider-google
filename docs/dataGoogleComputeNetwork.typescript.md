# `dataGoogleComputeNetwork` Submodule <a name="`dataGoogleComputeNetwork` Submodule" id="@cdktn/provider-google.dataGoogleComputeNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeNetwork <a name="DataGoogleComputeNetwork" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network google_compute_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer"></a>

```typescript
import { dataGoogleComputeNetwork } from '@cdktn/provider-google'

new dataGoogleComputeNetwork.DataGoogleComputeNetwork(scope: Construct, id: string, config?: DataGoogleComputeNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig">DataGoogleComputeNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig">DataGoogleComputeNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetNetworkProfile">resetNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetSelfLink">resetSelfLink</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkProfile` <a name="resetNetworkProfile" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetNetworkProfile"></a>

```typescript
public resetNetworkProfile(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSelfLink` <a name="resetSelfLink" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetSelfLink"></a>

```typescript
public resetSelfLink(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isConstruct"></a>

```typescript
import { dataGoogleComputeNetwork } from '@cdktn/provider-google'

dataGoogleComputeNetwork.DataGoogleComputeNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformElement"></a>

```typescript
import { dataGoogleComputeNetwork } from '@cdktn/provider-google'

dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeNetwork } from '@cdktn/provider-google'

dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeNetwork } from '@cdktn/provider-google'

dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleComputeNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.gatewayIpv4">gatewayIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.internalIpv6Range">internalIpv6Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkId">networkId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.numericId">numericId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.subnetworksSelfLinks">subnetworksSelfLinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkProfileInput">networkProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.selfLinkInput">selfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkProfile">networkProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gatewayIpv4`<sup>Required</sup> <a name="gatewayIpv4" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.gatewayIpv4"></a>

```typescript
public readonly gatewayIpv4: string;
```

- *Type:* string

---

##### `internalIpv6Range`<sup>Required</sup> <a name="internalIpv6Range" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.internalIpv6Range"></a>

```typescript
public readonly internalIpv6Range: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkId"></a>

```typescript
public readonly networkId: number;
```

- *Type:* number

---

##### `numericId`<sup>Required</sup> <a name="numericId" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.numericId"></a>

```typescript
public readonly numericId: string;
```

- *Type:* string

---

##### `subnetworksSelfLinks`<sup>Required</sup> <a name="subnetworksSelfLinks" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.subnetworksSelfLinks"></a>

```typescript
public readonly subnetworksSelfLinks: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkProfileInput`<sup>Optional</sup> <a name="networkProfileInput" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkProfileInput"></a>

```typescript
public readonly networkProfileInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `selfLinkInput`<sup>Optional</sup> <a name="selfLinkInput" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.selfLinkInput"></a>

```typescript
public readonly selfLinkInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkProfile"></a>

```typescript
public readonly networkProfile: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeNetworkConfig <a name="DataGoogleComputeNetworkConfig" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.Initializer"></a>

```typescript
import { dataGoogleComputeNetwork } from '@cdktn/provider-google'

const dataGoogleComputeNetworkConfig: dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network#id DataGoogleComputeNetwork#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network#name DataGoogleComputeNetwork#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.networkProfile">networkProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network#network_profile DataGoogleComputeNetwork#network_profile}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network#project DataGoogleComputeNetwork#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.selfLink">selfLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network#self_link DataGoogleComputeNetwork#self_link}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network#id DataGoogleComputeNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network#name DataGoogleComputeNetwork#name}.

---

##### `networkProfile`<sup>Optional</sup> <a name="networkProfile" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.networkProfile"></a>

```typescript
public readonly networkProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network#network_profile DataGoogleComputeNetwork#network_profile}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network#project DataGoogleComputeNetwork#project}.

---

##### `selfLink`<sup>Optional</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_network#self_link DataGoogleComputeNetwork#self_link}.

---



