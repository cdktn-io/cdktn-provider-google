# `dataGoogleCloudIdentityPolicies` Submodule <a name="`dataGoogleCloudIdentityPolicies` Submodule" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityPolicies <a name="DataGoogleCloudIdentityPolicies" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_identity_policies google_cloud_identity_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

new dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies(scope: Construct, id: string, config?: DataGoogleCloudIdentityPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig">DataGoogleCloudIdentityPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig">DataGoogleCloudIdentityPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudIdentityPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isConstruct"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformElement"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleCloudIdentityPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudIdentityPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudIdentityPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_identity_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList">DataGoogleCloudIdentityPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.policies"></a>

```typescript
public readonly policies: DataGoogleCloudIdentityPoliciesPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList">DataGoogleCloudIdentityPoliciesPoliciesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityPoliciesConfig <a name="DataGoogleCloudIdentityPoliciesConfig" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

const dataGoogleCloudIdentityPoliciesConfig: dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.filter">filter</a></code> | <code>string</code> | Filter expression for listing policies, as documented in the Cloud Identity Policy API policies.list method. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_identity_policies#id DataGoogleCloudIdentityPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Filter expression for listing policies, as documented in the Cloud Identity Policy API policies.list method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_identity_policies#filter DataGoogleCloudIdentityPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_identity_policies#id DataGoogleCloudIdentityPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityPoliciesPolicies <a name="DataGoogleCloudIdentityPoliciesPolicies" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPolicies.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

const dataGoogleCloudIdentityPoliciesPolicies: dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPolicies = { ... }
```


### DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery <a name="DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

const dataGoogleCloudIdentityPoliciesPoliciesPolicyQuery: dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityPoliciesPoliciesList <a name="DataGoogleCloudIdentityPoliciesPoliciesList" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

new dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudIdentityPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudIdentityPoliciesPoliciesOutputReference <a name="DataGoogleCloudIdentityPoliciesPoliciesOutputReference" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

new dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.customer">customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.policyQuery">policyQuery</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList">DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.setting">setting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPolicies">DataGoogleCloudIdentityPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyQuery`<sup>Required</sup> <a name="policyQuery" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.policyQuery"></a>

```typescript
public readonly policyQuery: DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList">DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList</a>

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.setting"></a>

```typescript
public readonly setting: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudIdentityPoliciesPolicies;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPolicies">DataGoogleCloudIdentityPoliciesPolicies</a>

---


### DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList <a name="DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

new dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.get"></a>

```typescript
public get(index: number): DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference <a name="DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicies } from '@cdktn/provider-google'

new dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.orgUnit">orgUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.sortOrder">sortOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery">DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `orgUnit`<sup>Required</sup> <a name="orgUnit" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.orgUnit"></a>

```typescript
public readonly orgUnit: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.sortOrder"></a>

```typescript
public readonly sortOrder: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery">DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery</a>

---



