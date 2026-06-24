# `dataGoogleNetworkSecurityAddressGroups` Submodule <a name="`dataGoogleNetworkSecurityAddressGroups` Submodule" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkSecurityAddressGroups <a name="DataGoogleNetworkSecurityAddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_security_address_groups google_network_security_address_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroups } from '@cdktn/provider-google'

new dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups(scope: Construct, id: string, config: DataGoogleNetworkSecurityAddressGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig">DataGoogleNetworkSecurityAddressGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig">DataGoogleNetworkSecurityAddressGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkSecurityAddressGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroups } from '@cdktn/provider-google'

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroups } from '@cdktn/provider-google'

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroups } from '@cdktn/provider-google'

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroups } from '@cdktn/provider-google'

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleNetworkSecurityAddressGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleNetworkSecurityAddressGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleNetworkSecurityAddressGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_security_address_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkSecurityAddressGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.addressGroups">addressGroups</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList">DataGoogleNetworkSecurityAddressGroupsAddressGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `addressGroups`<sup>Required</sup> <a name="addressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.addressGroups"></a>

```typescript
public readonly addressGroups: DataGoogleNetworkSecurityAddressGroupsAddressGroupsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList">DataGoogleNetworkSecurityAddressGroupsAddressGroupsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkSecurityAddressGroupsAddressGroups <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups.Initializer"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroups } from '@cdktn/provider-google'

const dataGoogleNetworkSecurityAddressGroupsAddressGroups: dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups = { ... }
```


### DataGoogleNetworkSecurityAddressGroupsConfig <a name="DataGoogleNetworkSecurityAddressGroupsConfig" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.Initializer"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroups } from '@cdktn/provider-google'

const dataGoogleNetworkSecurityAddressGroupsConfig: dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_security_address_groups#parent DataGoogleNetworkSecurityAddressGroups#parent}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkSecurityAddressGroupsAddressGroupsList <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroupsList" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroups } from '@cdktn/provider-google'

new dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get"></a>

```typescript
public get(index: number): DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroups } from '@cdktn/provider-google'

new dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups">DataGoogleNetworkSecurityAddressGroupsAddressGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleNetworkSecurityAddressGroupsAddressGroups;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups">DataGoogleNetworkSecurityAddressGroupsAddressGroups</a>

---



