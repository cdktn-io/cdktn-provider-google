# `dataGoogleAccessContextManagerSupportedServices` Submodule <a name="`dataGoogleAccessContextManagerSupportedServices` Submodule" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAccessContextManagerSupportedServices <a name="DataGoogleAccessContextManagerSupportedServices" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_services google_access_context_manager_supported_services}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedServices } from '@cdktn/provider-google'

new dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices(scope: Construct, id: string, config?: DataGoogleAccessContextManagerSupportedServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig">DataGoogleAccessContextManagerSupportedServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig">DataGoogleAccessContextManagerSupportedServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedServices resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isConstruct"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedServices } from '@cdktn/provider-google'

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformElement"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedServices } from '@cdktn/provider-google'

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformDataSource"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedServices } from '@cdktn/provider-google'

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedServices } from '@cdktn/provider-google'

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedServices resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleAccessContextManagerSupportedServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleAccessContextManagerSupportedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAccessContextManagerSupportedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.supportedServices">supportedServices</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList">DataGoogleAccessContextManagerSupportedServicesSupportedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `supportedServices`<sup>Required</sup> <a name="supportedServices" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.supportedServices"></a>

```typescript
public readonly supportedServices: DataGoogleAccessContextManagerSupportedServicesSupportedServicesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList">DataGoogleAccessContextManagerSupportedServicesSupportedServicesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAccessContextManagerSupportedServicesConfig <a name="DataGoogleAccessContextManagerSupportedServicesConfig" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedServices } from '@cdktn/provider-google'

const dataGoogleAccessContextManagerSupportedServicesConfig: dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_services#id DataGoogleAccessContextManagerSupportedServices#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_services#id DataGoogleAccessContextManagerSupportedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleAccessContextManagerSupportedServicesSupportedServices <a name="DataGoogleAccessContextManagerSupportedServicesSupportedServices" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedServices } from '@cdktn/provider-google'

const dataGoogleAccessContextManagerSupportedServicesSupportedServices: dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAccessContextManagerSupportedServicesSupportedServicesList <a name="DataGoogleAccessContextManagerSupportedServicesSupportedServicesList" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedServices } from '@cdktn/provider-google'

new dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.get"></a>

```typescript
public get(index: number): DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference <a name="DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedServices } from '@cdktn/provider-google'

new dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.availableOnRestrictedVip">availableOnRestrictedVip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.knownLimitations">knownLimitations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.serviceSupportStage">serviceSupportStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.supportStage">supportStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices">DataGoogleAccessContextManagerSupportedServicesSupportedServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableOnRestrictedVip`<sup>Required</sup> <a name="availableOnRestrictedVip" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.availableOnRestrictedVip"></a>

```typescript
public readonly availableOnRestrictedVip: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `knownLimitations`<sup>Required</sup> <a name="knownLimitations" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.knownLimitations"></a>

```typescript
public readonly knownLimitations: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceSupportStage`<sup>Required</sup> <a name="serviceSupportStage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.serviceSupportStage"></a>

```typescript
public readonly serviceSupportStage: string;
```

- *Type:* string

---

##### `supportStage`<sup>Required</sup> <a name="supportStage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.supportStage"></a>

```typescript
public readonly supportStage: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleAccessContextManagerSupportedServicesSupportedServices;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices">DataGoogleAccessContextManagerSupportedServicesSupportedServices</a>

---



