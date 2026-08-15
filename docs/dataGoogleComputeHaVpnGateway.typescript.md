# `dataGoogleComputeHaVpnGateway` Submodule <a name="`dataGoogleComputeHaVpnGateway` Submodule" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeHaVpnGateway <a name="DataGoogleComputeHaVpnGateway" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_ha_vpn_gateway google_compute_ha_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

new dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway(scope: Construct, id: string, config: DataGoogleComputeHaVpnGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig">DataGoogleComputeHaVpnGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig">DataGoogleComputeHaVpnGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeHaVpnGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isConstruct"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformElement"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleComputeHaVpnGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeHaVpnGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeHaVpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_ha_vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeHaVpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.gatewayIpVersion">gatewayIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList">DataGoogleComputeHaVpnGatewayParamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.stackType">stackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.vpnInterfaces">vpnInterfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList">DataGoogleComputeHaVpnGatewayVpnInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `gatewayIpVersion`<sup>Required</sup> <a name="gatewayIpVersion" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.gatewayIpVersion"></a>

```typescript
public readonly gatewayIpVersion: string;
```

- *Type:* string

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.params"></a>

```typescript
public readonly params: DataGoogleComputeHaVpnGatewayParamsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList">DataGoogleComputeHaVpnGatewayParamsList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `vpnInterfaces`<sup>Required</sup> <a name="vpnInterfaces" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.vpnInterfaces"></a>

```typescript
public readonly vpnInterfaces: DataGoogleComputeHaVpnGatewayVpnInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList">DataGoogleComputeHaVpnGatewayVpnInterfacesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeHaVpnGatewayConfig <a name="DataGoogleComputeHaVpnGatewayConfig" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.Initializer"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

const dataGoogleComputeHaVpnGatewayConfig: dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_ha_vpn_gateway#id DataGoogleComputeHaVpnGateway#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_ha_vpn_gateway#project DataGoogleComputeHaVpnGateway#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.region">region</a></code> | <code>string</code> | The region this gateway should sit in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_ha_vpn_gateway#name DataGoogleComputeHaVpnGateway#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_ha_vpn_gateway#id DataGoogleComputeHaVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_ha_vpn_gateway#project DataGoogleComputeHaVpnGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region this gateway should sit in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_ha_vpn_gateway#region DataGoogleComputeHaVpnGateway#region}

---

### DataGoogleComputeHaVpnGatewayParams <a name="DataGoogleComputeHaVpnGatewayParams" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParams.Initializer"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

const dataGoogleComputeHaVpnGatewayParams: dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParams = { ... }
```


### DataGoogleComputeHaVpnGatewayVpnInterfaces <a name="DataGoogleComputeHaVpnGatewayVpnInterfaces" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfaces.Initializer"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

const dataGoogleComputeHaVpnGatewayVpnInterfaces: dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfaces = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeHaVpnGatewayParamsList <a name="DataGoogleComputeHaVpnGatewayParamsList" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

new dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeHaVpnGatewayParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeHaVpnGatewayParamsOutputReference <a name="DataGoogleComputeHaVpnGatewayParamsOutputReference" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

new dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParams">DataGoogleComputeHaVpnGatewayParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeHaVpnGatewayParams;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParams">DataGoogleComputeHaVpnGatewayParams</a>

---


### DataGoogleComputeHaVpnGatewayVpnInterfacesList <a name="DataGoogleComputeHaVpnGatewayVpnInterfacesList" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

new dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference <a name="DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeHaVpnGateway } from '@cdktn/provider-google'

new dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachment">interconnectAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfaces">DataGoogleComputeHaVpnGatewayVpnInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `interconnectAttachment`<sup>Required</sup> <a name="interconnectAttachment" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachment"></a>

```typescript
public readonly interconnectAttachment: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeHaVpnGatewayVpnInterfaces;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfaces">DataGoogleComputeHaVpnGatewayVpnInterfaces</a>

---



