# `dataGoogleComputeNetworkEndpointGroups` Submodule <a name="`dataGoogleComputeNetworkEndpointGroups` Submodule" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeNetworkEndpointGroups <a name="DataGoogleComputeNetworkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_network_endpoint_groups google_compute_network_endpoint_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroups } from '@cdktn/provider-google'

new dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups(scope: Construct, id: string, config?: DataGoogleComputeNetworkEndpointGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig">DataGoogleComputeNetworkEndpointGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig">DataGoogleComputeNetworkEndpointGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeNetworkEndpointGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroups } from '@cdktn/provider-google'

dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroups } from '@cdktn/provider-google'

dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroups } from '@cdktn/provider-google'

dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroups } from '@cdktn/provider-google'

dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleComputeNetworkEndpointGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeNetworkEndpointGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeNetworkEndpointGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_network_endpoint_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeNetworkEndpointGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.networkEndpointGroups">networkEndpointGroups</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `networkEndpointGroups`<sup>Required</sup> <a name="networkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.networkEndpointGroups"></a>

```typescript
public readonly networkEndpointGroups: DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeNetworkEndpointGroupsConfig <a name="DataGoogleComputeNetworkEndpointGroupsConfig" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.Initializer"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroups } from '@cdktn/provider-google'

const dataGoogleComputeNetworkEndpointGroupsConfig: dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_network_endpoint_groups#filter DataGoogleComputeNetworkEndpointGroups#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_network_endpoint_groups#id DataGoogleComputeNetworkEndpointGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_network_endpoint_groups#project DataGoogleComputeNetworkEndpointGroups#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_network_endpoint_groups#zone DataGoogleComputeNetworkEndpointGroups#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_network_endpoint_groups#filter DataGoogleComputeNetworkEndpointGroups#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_network_endpoint_groups#id DataGoogleComputeNetworkEndpointGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_network_endpoint_groups#project DataGoogleComputeNetworkEndpointGroups#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_network_endpoint_groups#zone DataGoogleComputeNetworkEndpointGroups#zone}.

---

### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups.Initializer"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroups } from '@cdktn/provider-google'

const dataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups: dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroups } from '@cdktn/provider-google'

new dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroups } from '@cdktn/provider-google'

new dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.defaultPort">defaultPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.generatedId">generatedId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPort`<sup>Required</sup> <a name="defaultPort" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.defaultPort"></a>

```typescript
public readonly defaultPort: number;
```

- *Type:* number

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `generatedId`<sup>Required</sup> <a name="generatedId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.generatedId"></a>

```typescript
public readonly generatedId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups</a>

---



